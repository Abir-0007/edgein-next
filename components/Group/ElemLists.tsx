import React, { useState } from "react";
import moment from "moment-timezone";
import toast, { Toaster } from "react-hot-toast";
import { kebabCase } from "lodash";
import { IconCustomList, IconListPlus, IconCheck } from "@/components/Icons";
import { ElemButton } from "@/components/ElemButton";
import { getNameFromListName } from "@/utils/reaction";
import Link from "next/link";
import {
	Lists,
	List_Members_Bool_Exp,
	User_Groups,
	useGetListMembersQuery,
} from "@/graphql/types";
import { useUser } from "@/context/userContext";
import ElemAddListDialog from "./ElemAddListDialog";
import differenceBy from "lodash/differenceBy";

type Props = {
	className?: string;
	group: User_Groups;
	lists: Array<Lists>;
	refetchLists: () => void;
};

export const ElemLists: React.FC<Props> = ({
	group,
	lists,
	refetchLists,
	className,
}) => {
	const { user, listAndFollows } = useUser();

	const [isOpenAddList, setIsOpenAddList] = useState<boolean>(false);

	const { data, refetch } = useGetListMembersQuery(
		{
			where: {
				user_id: { _eq: user?.id },
			} as List_Members_Bool_Exp,
		},
		{
			enabled: Boolean(user?.id),
		}
	);
	const listMembers = data?.list_members || [];

	const customLists = listAndFollows
		?.filter(
			(list) => !["hot", "crap", "like"].includes(getNameFromListName(list))
		)
		.sort((a, b) => (a.name < b.name ? -1 : 1));

	const listOptions = differenceBy(customLists, lists, "id").map((item) => ({
		id: item.id,
		title: getNameFromListName(item),
	}));

	const handleToggleFollow = async (listId: number, isFollowing: boolean) => {
		const response = await fetch("/api/toggle_follow_list/", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				listId,
				userId: user?.id,
			}),
		});

		if (response.status === 200) {
			refetch();
			if (isFollowing) {
				toast.custom(
					(t) => (
						<div
							className={`bg-slate-800 text-white py-2 px-4 rounded-lg transition-opacity ease-out duration-300 ${
								t.visible ? "animate-fade-in-up" : "opacity-0"
							}`}
						>
							List unfollowed
						</div>
					),
					{
						duration: 3000,
						position: "top-center",
					}
				);
			}
		}
	};

	const handleAddList = async (listIds: Array<number>) => {
		const response = await fetch("/api/add_list_to_group/", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				groupId: group?.id,
				listIds,
			}),
		});

		if (response.status === 200) {
			refetchLists();
			toast.custom(
				(t) => (
					<div
						className={`bg-slate-800 text-white py-2 px-4 rounded-lg transition-opacity ease-out duration-300 ${
							t.visible ? "animate-fade-in-up" : "opacity-0"
						}`}
					>
						Lists Added
					</div>
				),
				{
					duration: 3000,
					position: "top-center",
				}
			);
		}
	};

	const formatDateShown = (date: Date) => {
		let utcTime = date;
		const local_date = moment
			.utc(utcTime)
			.local()
			.format("YYYY-MM-DD HH:mm:ss");

		const lastMonth = moment().subtract(1, "months").valueOf();
		const noteCreated = moment(local_date).valueOf();

		// if note is older than a month
		if (lastMonth > noteCreated) {
			return moment(local_date).format("LL");
		} else {
			return moment(local_date).fromNow();
		}
	};

	return (
		<div className={`mt-7 lg:mt-0 ${className ? className : ""}`}>
			<div className="flex items-center justify-between py-1">
				<div>
					<h2 className="text-xl font-bold">{`Lists (${lists.length})`}</h2>
				</div>
				<ElemButton btn="transparent" onClick={() => setIsOpenAddList(true)}>
					<IconListPlus className="w-6 h-6 mr-1" />
					<span>Add List</span>
				</ElemButton>
			</div>

			<div className="bg-white shadow rounded-lg px-4 py-4 shrink-0">
				{lists.length > 0 ? (
					<ul className="flex flex-col space-y-5">
						{lists.map((item) => {
							if (!item) {
								debugger;
								return <></>;
							}
							const isFollowing = listMembers.some(
								(mem) => mem.list_id === item.id
							);
							const listItem = (
								<li
									key={item.id}
									className="flex space-x-4 justify-between items-start"
								>
									<Link
										href={`/lists/${item.id}/${kebabCase(
											getNameFromListName(item)
										)}`}
									>
										<a className="flex items-start space-x-3 group">
											<div className="flex items-center justify-center shrink-0 w-6 h-6">
												<IconCustomList className="object-fit max-w-full max-h-full group-hover:text-primary-500" />
											</div>
											<div>
												<h3
													className="line-clamp-1 break-all font-bold leading-tight group-hover:text-primary-500"
													title={getNameFromListName(item)}
												>
													{getNameFromListName(item)}
												</h3>

												<p className="text-slate-500 text-sm">
													<span className="capitalize">
														{item.created_by?.display_name}
													</span>
													<span aria-hidden="true"> · </span>
													{formatDateShown(item?.created_at)}
												</p>
											</div>
										</a>
									</Link>

									<ElemButton
										btn="slate"
										size="sm"
										className={`${isFollowing ? "" : ""}`}
										onClick={() => handleToggleFollow(item.id, isFollowing)}
									>
										{isFollowing ? (
											<>
												<IconCheck className="w-5 h-5 mr-1" />
												Following
											</>
										) : (
											<>Follow</>
										)}
									</ElemButton>
								</li>
							);
							return listItem;
						})}
					</ul>
				) : (
					<p className="text-slate-500 mt-2">
						Share any of your lists with the group.
					</p>
				)}
			</div>

			<ElemAddListDialog
				isOpen={isOpenAddList}
				listOptions={listOptions}
				onCloseModal={() => setIsOpenAddList(false)}
				onSave={handleAddList}
			/>

			<Toaster />
		</div>
	);
};
