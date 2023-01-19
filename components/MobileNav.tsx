import { FC, PropsWithChildren, Fragment, useState } from "react";
import { find, kebabCase, first } from "lodash";
import Link from "next/link";
import { getNameFromListName } from "@/utils/reaction";
import {
	IconX,
	IconLinkedIn,
	IconTwitter,
	IconCash,
	IconCompanies,
	IconUsers,
	IconEmail,
	IconSettings,
	IconCustomList,
	IconGroup,
	IconSignOut,
} from "@/components/Icons";
import { Transition, Dialog } from "@headlessui/react";
import { useUser } from "@/context/userContext";

type Props = {
	className?: string;
};

export const MobileNav: FC<PropsWithChildren<Props>> = ({ className = "" }) => {
	const { listAndFollows, user, loading, myGroups } = useUser();

	const [navOpen, setNavOpen] = useState(false);

	const onOpen = () => {
		setNavOpen(true);
	};

	const onClose = () => {
		setNavOpen(false);
	};

	const firstCustomList = first(
		listAndFollows?.filter(
			(list) => !["hot", "crap", "like"].includes(getNameFromListName(list))
		)
	);
	let myListsUrl = "";
	if (firstCustomList) {
		myListsUrl = `/lists/${firstCustomList.id}/${kebabCase(
			getNameFromListName(firstCustomList)
		)}`;
	} else {
		const hotId =
			find(listAndFollows, (list) => "hot" === getNameFromListName(list))?.id ||
			0;
		myListsUrl = `/lists/${hotId}/hot`;
	}

	const logout = async () => {
		localStorage.clear();
		const authRequest = await fetch("/api/logout/", {
			method: "POST",
		}).then((res) => res.json());
		if (authRequest.success) {
			// We successfully logged in, our API
			// set authorization cookies and now we
			// can redirect to the dashboard!
			location.href = authRequest.logoutLink;
		} else {
			/* handle errors */
		}
	};

	const firstCustomGroup = first(myGroups ? myGroups : null);

	const navigation = [
		{
			heading: "Explore",
			links: [
				{ icon: IconCompanies, name: "Companies", href: "/companies" },
				{ icon: IconCash, name: "Investors", href: "/investors" },
				{ icon: IconUsers, name: "Team", href: "/team" },
				{ icon: IconEmail, name: "Contact", href: "/contact" },
			],
		},
		{
			heading: "My EdgeIn",
			links: [
				{
					icon: IconSettings,
					name: "Account Settings",
					href: "/account",
				},
				{ icon: IconCustomList, name: "My Lists", href: myListsUrl },
				...(firstCustomGroup
					? [
							{
								icon: IconGroup,
								name: "My Groups",
								href: `/groups/${firstCustomGroup.id}/`,
							},
					  ]
					: []),
				{
					icon: IconSignOut,
					onClick: () => {
						logout(), setNavOpen(false);
					},
					name: "Sign out",
				},
			],
		},
		{
			heading: "Follow Us",
			links: [
				{
					name: "LinkedIn",
					href: "https://www.linkedin.com/company/edgein/",
					icon: IconLinkedIn,
				},
				{
					name: "Twitter",
					href: "https://twitter.com/EdgeInio",
					icon: IconTwitter,
				},
			],
		},
	];

	return (
		<>
			<div className={className}>
				<button
					onClick={onOpen}
					className="hamburger relative w-8 h-[36px] px-[3px] py-4"
				>
					<span
						className={`${
							navOpen
								? "hamburger-active rotate-45 before:top-0 before:opacity-0 after:bottom-0 after:rotate-90"
								: ""
						} hamburger-inner block -mt-px top-1/2 transition ease-in-out duration-150 before:block before:content-[''] after:block after:content-['']`}
					></span>
					<span className="sr-only">Toggle menu</span>
				</button>
				<Transition.Root show={navOpen} as={Fragment}>
					<Dialog
						as="div"
						className="relative z-40 lg:hidden"
						onClose={onClose}
					>
						<Transition.Child
							as={Fragment}
							enter="transition-opacity ease-linear duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-linear duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
						</Transition.Child>

						<div className="fixed inset-0 z-40 flex justify-end">
							<div className="flex-shrink-0 w-14">
								{/* Dummy element to force sidebar to shrink to fit close icon */}
							</div>
							<Transition.Child
								as={Fragment}
								enter="transition ease-in-out duration-300 transform"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transition ease-in-out duration-300 transform"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="max-w-md w-full bg-white flex-1 flex flex-col">
									<Dialog.Title className="flex items-center justify-end px-1 py-2">
										<button type="button" onClick={onClose}>
											<IconX className="h-8 w-8" title="close" />
										</button>
									</Dialog.Title>

									<div className="flex flex-col h-full overflow-y-scroll divide-y divide-black/10 px-8">
										{navigation.map((section, index) => (
											<div key={index} className="pt-6 pb-3 first:pt-0">
												<h3 className="text-xl font-bold">{section.heading}</h3>
												<ul>
													{section.links.map((item, index) => (
														<li key={index}>
															<Link href={item.href ? item.href : ""}>
																<a
																	onClick={
																		item.onClick ? item.onClick : onClose
																	}
																	className="flex items-center py-3 text-lg hover:text-primary-500"
																>
																	{item.icon && (
																		<item.icon
																			title={item.name}
																			className="h-6 w-6 mr-4 shrink-0"
																		/>
																	)}
																	{item.name}
																</a>
															</Link>
														</li>
													))}
												</ul>
											</div>
										))}
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</Dialog>
				</Transition.Root>
			</div>
		</>
	);
};
