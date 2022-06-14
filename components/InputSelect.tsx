import { Listbox, Transition } from "@headlessui/react";
import React, { PropsWithChildren, Fragment } from "react";

type Props = {
	className?: string;
	value?: any;
	placeholder?: any;
	onChange?: any;
	options: Record<string, any>[];
};

export const InputSelect: React.FC<PropsWithChildren<Props>> = ({
	className = "",
	value, //{title: "", description: ""}
	placeholder = "",
	options,
	onChange,
}) => {
	return (
		<div className={className}>
			<Listbox value={value} onChange={onChange}>
				{({ open }) => (
					<>
						<div className="relative">
							<Listbox.Button className="relative w-full text-dark-500 bg-white border border-transparent rounded-md pl-3 pr-10 py-1.5 text-left cursor-default focus:outline-none focus:border-primary-500 hover:ring hover:ring-primary-100 focus:ring focus:ring-primary-100">
								<div className="truncate">
									{value?.title ? value.title : placeholder}
									<span className="text-gray-400 text-sm ml-2">
										{value?.description && value.description}
									</span>
								</div>
								<div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
									<IconSelector className="h-5 w-5 text-gray-400" />
								</div>
							</Listbox.Button>

							<Transition
								show={open}
								as={Fragment}
								leave="transition ease-in duration-100"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<Listbox.Options className="absolute z-10 mt-1 w-full bg-white divide-y divide-gray-100 shadow-xl max-h-60 rounded-md overflow-auto focus:outline-none">
									{options.map((option: any) => (
										<Listbox.Option
											key={option.id}
											value={option}
											className={({ active }) =>
												`${
													active
														? "text-primary-500 bg-primary-100"
														: "text-dark-500"
												} cursor-default select-none relative py-2 pl-3 pr-9`
											}
										>
											{({ selected }) => (
												<>
													<div
														className={`${
															selected ? "font-bold" : "font-normal"
														} truncate align-bottom`}
														title={`${
															option.title ? option.title : placeholder
														}${option.description ? option.description : ""}`}
													>
														{option.title ? option.title : placeholder}
													</div>
													<div className="text-gray-400 text-xs">
														{option.description ? option.description : ""}
													</div>

													{selected && (
														<div className="absolute z-50 inset-y-0 right-0 flex items-center pr-4 text-primary-500">
															<IconCheck className="h-5 w-5" />
														</div>
													)}
												</>
											)}
										</Listbox.Option>
									))}
								</Listbox.Options>
							</Transition>
						</div>
					</>
				)}
			</Listbox>
		</div>
	);
};

type IconProps = {
	className?: string;
	title?: string;
};

const IconSelector: React.FC<IconProps> = ({
	className,
	title = "Selector",
}) => {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${className}`}
			stroke="currentColor"
			strokeWidth="2"
		>
			<title>{title}</title>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M8 9l4-4 4 4m0 6l-4 4-4-4"
			/>
		</svg>
	);
};

const IconCheck: React.FC<IconProps> = ({ className, title = "Check" }) => {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${className}`}
			stroke="currentColor"
			strokeWidth="2"
		>
			<title>{title}</title>
			<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
		</svg>
	);
};
