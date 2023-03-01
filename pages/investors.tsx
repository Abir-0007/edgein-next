import React, { Fragment, useEffect, useState } from "react";
import type { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ElemHeading } from "@/components/ElemHeading";
import { PlaceholderInvestorCard } from "@/components/Placeholders";
import { InputSelect } from "@/components/InputSelect";
import { ElemRecentInvestments } from "@/components/Investors/ElemRecentInvestments";
import { ElemButton } from "@/components/ElemButton";
import { ElemTagsCarousel } from "@/components/ElemTagsCarousel";
import { Pagination } from "@/components/Pagination";
import { ElemInvestorCard } from "@/components/Investors/ElemInvestorCard";
import {
	IconSearch,
	IconAnnotation,
	IconX,
	IconFilter,
} from "@/components/Icons";
import {
	GetVcFirmsDocument,
	GetVcFirmsQuery,
	useGetVcFirmsQuery,
	Vc_Firms_Bool_Exp,
	Vc_Firms,
} from "@/graphql/types";
import { DeepPartial, NumericFilter } from "@/pages/companies";
import { runGraphQl, numberWithCommas } from "@/utils";
import { investorChoices } from "@/utils/constants";
import { useAuth } from "@/hooks/useAuth";
import { useStateParams } from "@/hooks/useStateParams";
import toast, { Toaster } from "react-hot-toast";
import { onTrackView } from "@/utils/track";
import { Filters, ElemFilter } from "@/components/ElemFilter";
import moment from "moment-timezone";

type Props = {
	vcFirmCount: number;
	initialVCFirms: GetVcFirmsQuery["vc_firms"];
	investorsStatusTags: TextFilter[];
	numberOfInvestments: NumericFilter[];
	setToggleFeedbackForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const Investors: NextPage<Props> = ({
	vcFirmCount,
	initialVCFirms,
	investorsStatusTags,
	numberOfInvestments,
	setToggleFeedbackForm,
}) => {
	const [initialLoad, setInitialLoad] = useState(true);

	const router = useRouter();

	// Investor Status Tag
	const [selectedStatusTag, setSelectedStatusTag] = useStateParams(
		investorsStatusTags[0],
		"statusTag",
		(statusTag) => investorsStatusTags.indexOf(statusTag).toString(),
		(index) => investorsStatusTags[Number(index)]
	);

	// Investments Count
	const [selectedInvestmentCount, setSelectedInvestmentCount] = useState(
		numberOfInvestments[0]
	);

	// Filters
	const [selectedFilters, setSelectedFilters] = useStateParams<Filters | null>(
		null,
		"filters",
		(filters) => {
			if (!filters) {
				return "";
			}
			return JSON.stringify(filters);
		},
		(filterString) => {
			if (filterString) {
				const filterJson: Filters = JSON.parse(filterString);
				if (filterJson?.lastFundingDate?.fromDate) {
					filterJson.lastFundingDate.fromDate = moment(
						filterJson.lastFundingDate.fromDate
					)
						.format()
						.split("T")[0];
				}
				if (filterJson?.lastFundingDate?.toDate) {
					filterJson.lastFundingDate.toDate = moment(
						filterJson.lastFundingDate.toDate
					)
						.format()
						.split("T")[0];
				}
				return filterJson;
			}
			return null;
		}
	);

	const [page, setPage] = useStateParams<number>(
		0,
		"page",
		(pageIndex) => pageIndex + 1 + "",
		(pageIndex) => Number(pageIndex) - 1
	);
	const limit = 50;
	const offset = limit * page;

	const [selectedTags, setSelectedTags] = useStateParams<string[]>(
		[],
		"tags",
		(tagArr) => tagArr.join(","),
		(tag) => tag.split(",")
	);

	const filters: DeepPartial<Vc_Firms_Bool_Exp> = {
		_and: [{ slug: { _neq: "" } }],
	};

	useEffect(() => {
		if (!initialLoad) {
			setPage(0);
		}
		if (
			initialLoad &&
			selectedTags.length !== 0 &&
			selectedInvestmentCount.rangeEnd !== 0
		) {
			setInitialLoad(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedTags, selectedInvestmentCount]);

	useEffect(() => {
		onTrackView({
			properties: filters,
			pathname: router.pathname,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedTags, selectedInvestmentCount, selectedStatusTag]);

	const filterByTag = async (
		event: React.MouseEvent<HTMLDivElement>,
		tag: string
	) => {
		event.stopPropagation();
		event.preventDefault();

		const newTags = selectedTags.includes(tag)
			? selectedTags.filter((t) => t !== tag)
			: [tag, ...selectedTags];
		setSelectedTags(newTags);

		selectedTags.includes(tag)
			? toast.custom(
					(t) => (
						<div
							className={`bg-slate-800 text-white py-2 px-4 rounded-lg transition-opacity ease-out duration-300 ${
								t.visible ? "animate-fade-in-up" : "opacity-0"
							}`}
						>
							Removed &ldquo;{tag}&rdquo; Filter
						</div>
					),
					{
						duration: 3000,
						position: "top-center",
					}
			  )
			: toast.custom(
					(t) => (
						<div
							className={`bg-slate-800 text-white py-2 px-4 rounded-lg transition-opacity ease-out duration-300 ${
								t.visible ? "animate-fade-in-up" : "opacity-0"
							}`}
						>
							Added &ldquo;{tag}&rdquo; Filter
						</div>
					),
					{
						duration: 3000,
						position: "top-center",
					}
			  );
	};

	const clearTagFilters = async () => {
		setSelectedTags([]);

		toast.custom(
			(t) => (
				<div
					className={`bg-slate-800 text-white py-2 px-4 rounded-lg transition-opacity ease-out duration-300 ${
						t.visible ? "animate-fade-in-up" : "opacity-0"
					}`}
				>
					Tag Filters Removed
				</div>
			),
			{
				duration: 3000,
				position: "top-center",
			}
		);
	};

	if (selectedTags.length > 0) {
		let allTags: any = [];
		selectedTags.map((tag) => {
			allTags.push({ tags: { _contains: tag } });
		});

		filters._and?.push({
			_and: allTags,
		});
	}

	if (selectedInvestmentCount.rangeEnd !== 0) {
		filters._and?.push({
			_and: [
				{ num_of_investments: { _gt: selectedInvestmentCount.rangeStart } },
				{ num_of_investments: { _lte: selectedInvestmentCount.rangeEnd } },
			],
		});
	}

	if (selectedStatusTag.value) {
		filters._and?.push({
			status_tags: { _contains: selectedStatusTag.value },
		});
	}

	const {
		data: vcFirmsData,
		error,
		isLoading,
	} = useGetVcFirmsQuery({
		offset,
		limit,
		where: filters as Vc_Firms_Bool_Exp,
	});

	if (!isLoading && initialLoad) {
		setInitialLoad(false);
	}

	const vcFirms = initialLoad ? initialVCFirms : vcFirmsData?.vc_firms;
	const vcfirms_aggregate = initialLoad
		? vcFirmCount
		: vcFirmsData?.vc_firms_aggregate?.aggregate?.count || 0;

	return (
		<div className="relative overflow-hidden">
			<ElemHeading
				title="Investors"
				subtitle="We're tracking investments made in web3 companies and projects to provide you with an index of the most active and influential capital in the industry."
			></ElemHeading>

			<div className="max-w-7xl px-4 mx-auto relative z-10 sm:px-6 lg:px-8">
				<ElemRecentInvestments heading="Recent Updates" />
			</div>
			<div className="max-w-7xl px-4 mx-auto mt-7 sm:px-6 lg:px-8">
				<div className="bg-white rounded-lg shadow p-5">
				<h2 className="text-xl font-bold">Investors</h2>

				<div
						className="mt-2 -mr-5 pr-5 flex items-center justify-between border-y border-black/10 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth snap-x snap-mandatory touch-pan-x lg:mr-0 lg:pr-0"
						role="tablist"
					>
						<nav className="flex">
							{investorsStatusTags &&
								investorsStatusTags.map((tab: any, index: number) =>
									tab.disabled === true ? (
										<Fragment key={index}></Fragment>
									) : (
										<button
											key={index}
											onClick={() => setSelectedStatusTag(tab)}
											className={`whitespace-nowrap flex py-3 px-3 border-b-2 box-border font-bold transition-all ${
												selectedStatusTag.value === tab.value
													? "text-primary-500 border-primary-500"
													: "border-transparent  hover:bg-slate-200"
											} ${tab.disabled ? "cursor-not-allowed" : ""}}`}
										>
											{tab.title}
										</button>
									)
								)}
						</nav>
					</div>

					<ElemFilter
						resourceType="vc_firms"
						defaultFilters={selectedFilters}
						onApply={(name, filterParams) => {
							filters._and = [{ slug: { _neq: "" } }];
							setSelectedFilters({ ...selectedFilters, [name]: filterParams });
						}}
						onClearOption={(name) => {
							filters._and = [{ slug: { _neq: "" } }];
							setSelectedFilters({ ...selectedFilters, [name]: undefined });
						}}
						onReset={() => setSelectedFilters(null)}
					/>

					{/* <section className="pt-2 pb-3">
						<div className="w-full flex flex-wrap justify-between lg:space-x-5 lg:flex-nowrap">
							<InputSelect
								className="md:shrink md:basis-0"
								buttonClasses="w-auto"
								dropdownClasses="w-60"
								value={selectedStatusTag}
								onChange={setSelectedStatusTag}
								options={investorsStatusTags}
							/>

							<div className="w-full overflow-hidden grow min-w-0 order-last lg:order-none">
								<ElemTagsCarousel
									onClick={filterByTag}
									selectedTags={selectedTags}
								/>
							</div>

							<div className="self-end sm:shrink sm:basis-0 sm:self-auto">
								<ElemButton
									onClick={() => setToggleFilters(!toggleFilters)}
									btn="white"
									roundedFull={false}
									className="rounded-md font-normal focus:ring-1 focus:ring-slate-200"
								>
									<IconFilter className="w-5 h-5 mr-1" />
									Filters
								</ElemButton>
							</div>
						</div>
						{toggleFilters && (
							<div className="mt-3 grid gap-5 grid-cols-1 lg:grid-cols-3">
								<InputSelect
									className="w-full"
									value={selectedInvestmentCount}
									onChange={setSelectedInvestmentCount}
									options={numberOfInvestments}
								/>
							</div>
						)}
					</section> */}

					{vcFirms?.length === 0 && (
						<div className="flex items-center justify-center mx-auto min-h-[40vh]">
							<div className="w-full max-w-2xl my-8 p-8 text-center bg-white border rounded-2xl border-dark-500/10">
								<IconSearch className="w-12 h-12 mx-auto text-slate-300" />
								<h2 className="mt-5 text-3xl font-bold">No results found</h2>
								<div className="mt-1 text-lg text-slate-600">
									Please check spelling, try different filters, or tell us about
									missing data.
								</div>
								<ElemButton
									onClick={() => setToggleFeedbackForm(true)}
									btn="white"
									className="mt-3"
								>
									<IconAnnotation className="w-6 h-6 mr-1" />
									Tell us about missing data
								</ElemButton>
							</div>
						</div>
					)}

					<div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						{error ? (
							<h4>Error loading investors</h4>
						) : isLoading && !initialLoad ? (
							<>
								{Array.from({ length: 15 }, (_, i) => (
									<PlaceholderInvestorCard key={i} />
								))}
							</>
						) : (
							vcFirms?.map((vcfirm) => (
								<ElemInvestorCard
									key={vcfirm.id}
									vcFirm={vcfirm as Vc_Firms}
									tagOnClick={filterByTag}
								/>
							))
						)}
					</div>
					<Pagination
						shownItems={vcFirms?.length}
						totalItems={vcfirms_aggregate}
						page={page}
						itemsPerPage={limit}
						numeric
						onClickPrev={() => setPage(page - 1)}
						onClickNext={() => setPage(page + 1)}
						onClickToPage={(selectedPage) => setPage(selectedPage)}
					/>
				</div>
			</div>
			<Toaster />
		</div>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { data: vcFirms } = await runGraphQl<GetVcFirmsQuery>(
		GetVcFirmsDocument,
		{
			offset: 0,
			limit: 50,
			where: { slug: { _neq: "" } },
		}
	);

	return {
		props: {
			metaTitle: "Web3 Investors - EdgeIn.io",
			metaDescription:
				"We're tracking investments made in web3 companies and projects to provide you with an index of the most active and influential capital in the industry.",
			vcFirmCount: vcFirms?.vc_firms_aggregate.aggregate?.count || 0,
			initialVCFirms: vcFirms?.vc_firms || [],
			investorsStatusTags,
			numberOfInvestments: InvestmentsFilters,
		},
	};
};

export default Investors;

interface TextFilter {
	title: string;
	description?: string;
	icon?: string;
	value: string;
}

// Total Investments Filter
const InvestmentsFilters: NumericFilter[] = [
	{
		title: "Number of Investments",
		rangeStart: 0,
		rangeEnd: 0,
	},
	{
		title: "5 or less Investments",
		rangeStart: 0,
		rangeEnd: 5,
	},
	{
		title: "6-15 Investments",
		rangeStart: 6,
		rangeEnd: 15,
	},
	{
		title: "16-25 Investments",
		rangeStart: 16,
		rangeEnd: 25,
	},
	{
		title: "25+ Investments",
		rangeStart: 25,
		rangeEnd: 1000000000,
	},
];

const investorFilterValue = investorChoices.map((option) => {
	return {
		title: option.name,
		value: option.id,
		icon: option.id,
		disabled: option.disabled ? option.disabled : false,
	};
});

const investorsStatusTags: TextFilter[] = [
	{
		title: "All Investors",
		value: "",
	},
	...investorFilterValue,
];
