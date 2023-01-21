import { getNameFromListName } from "@/utils/reaction";
import { find, kebabCase } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import {
	IconCustomList,
	IconPolygonDown,
	IconGroupPlus,
} from "@/components/Icons";
import { EmojiHot, EmojiLike, EmojiCrap } from "@/components/Emojis";
import { useUser } from "@/context/userContext";
import { Disclosure } from "@headlessui/react";

type Props = {
	className?: string;
};

export const ElemMyListsMenu: FC<Props> = ({ className = "" }) => {
	const router = useRouter();
	const { listAndFollows: lists, user } = useUser();

	const getCountForList = (listName: string) => {
		if (lists) {
			const list = find(
				lists,
				(item) => getNameFromListName(item) === listName
			);
			return list?.total_no_of_resources ?? 0;
		}
		return 0;
	};

	const getActiveClass = (id: number, name: string) => {
		return `/lists/${id}/${name}/` === router.asPath
			? "  text-primary-500 bg-slate-200"
			: "";
	};

	const hotId =
		find(lists, (list) => "hot" === getNameFromListName(list))?.id || 0;
	const likeId =
		find(lists, (list) => "like" === getNameFromListName(list))?.id || 0;
	const crapId =
		find(lists, (list) => "crap" === getNameFromListName(list))?.id || 0;
	const getCustomLists = lists
		?.filter(
			(list) => !["hot", "crap", "like"].includes(getNameFromListName(list))
		)
		.sort((a, b) => (a.name < b.name ? -1 : 1))
	const displayedCustomLists = getCustomLists
		.slice(0, user?.entitlements.listsCount ? user?.entitlements.listsCount : getCustomLists.length);

		const [isOpenUpgradeDialog, setIsOpenUpgradeDialog] = useState(false);

		const onOpenUpgradeDialog = () => {
			setIsOpenUpgradeDialog(true);
		}
		const onCloseUpgradeDialog = () => {
			setIsOpenUpgradeDialog(false);
		};
	
	return (
		<div className={className}>
			<Disclosure defaultOpen={true}>
				{({ open }) => (
					<>
						<div className="w-full flex items-center justify-between">
							<Disclosure.Button className="flex focus:outline-none hover:opacity-75">
								<IconPolygonDown
									className={`${
										open ? "rotate-0" : "-rotate-90 "
									} h-6 w-6 transform transition-all`}
								/>
								<span className="text-xl font-bold">My Lists</span>
							</Disclosure.Button>
							<div className="flex gap-x-1">
								{/* <button
									onClick={() => {}}
									className="cursor-pointer rounded-md group p-0 m-0 transition-all hover:bg-slate-200"
								>
									<IconEllipsisHorizontal
										className="h-6 w-6 group-hover:text-primary-500"
										title="Options"
									/>
								</button>
								<button
									onClick={() => {}}
									className="cursor-pointer rounded-md group p-0 m-0 transition-all hover:bg-slate-200"
								>
									<IconPlus className="h-6 w-6" title="Create Group" />
								</button> */}
							</div>
						</div>

						<Disclosure.Panel as="ul" className="mt-1 space-y-1 text-slate-600">
							<li role="button">
								<Link href={`/lists/${hotId}/hot`}>
									<a
										className={`flex space-x-2 py-1.5 px-2 rounded-md flex-1 transition-all hover:bg-slate-200 hover:text-primary-500 ${getActiveClass(
											hotId,
											"hot"
										)}`}
									>
										<EmojiHot className="h-6 w-6" />{" "}
										<span>Hot ({getCountForList("hot")})</span>
									</a>
								</Link>
							</li>
							<li role="button">
								<Link href={`/lists/${likeId}/like`}>
									<a
										className={`flex space-x-2 py-1.5 px-2 rounded-md flex-1 transition-all hover:bg-slate-200 hover:text-primary-500 ${getActiveClass(
											likeId,
											"like"
										)}`}
									>
										<EmojiLike className="h-6 w-6" />
										<span>Like ({getCountForList("like")})</span>
									</a>
								</Link>
							</li>
							<li role="button">
								<Link href={`/lists/${crapId}/sh**`}>
									<a
										className={`flex space-x-2 py-1.5 px-2 rounded-md flex-1 transition-all hover:bg-slate-200 hover:text-primary-500 ${getActiveClass(
											crapId,
											"sh**"
										)} `}
									>
										<EmojiCrap className="h-6 w-6" />
										<span>Sh** ({getCountForList("crap")})</span>
									</a>
								</Link>
							</li>

							{displayedCustomLists?.map((list) => (
								<li key={list.id} role="button">
									<Link
										href={`/lists/${list.id}/${kebabCase(
											getNameFromListName(list)
										)}`}
									>
										<a
											className={`flex space-x-2 py-1.5 px-2 rounded-md flex-1 transition-all hover:bg-slate-200 hover:text-primary-500 ${getActiveClass(
												list.id,
												kebabCase(getNameFromListName(list))
											)}`}
										>
											<IconCustomList className="h-6 w-6" />
											<span>
												{getNameFromListName(list)} (
												{getCountForList(getNameFromListName(list))})
											</span>
										</a>
									</Link>
								</li>
							))}
							{ (getCustomLists.length > displayedCustomLists.length) && <li role="button">
								<button
									onClick={onOpenUpgradeDialog}
									className="w-full flex space-x-2 py-1.5 px-2 rounded-md flex-1 transition-all hover:bg-slate-200 hover:text-primary-500"
								>
									<IconGroupPlus className="h-6 w-6" title="Create Group" />
									<span>Unlock All Your Lists</span>
								</button>
							</li> }
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	);
};
