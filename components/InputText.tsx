import React, { PropsWithChildren } from "react";

type Props = {
	className?: string;
	label?: string;
	type?: "text" | "email" | "search" | "";
	name: string;
	value: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	placeholder?: string;
	required?: boolean;
	autoComplete?: string;
};

export const InputText: React.FC<PropsWithChildren<Props>> = ({
	className = "",
	label,
	type = "",
	name,
	value,
	onChange,
	placeholder = "",
	required = false,
	autoComplete = "on",
}) => {
	return (
		<>
			{label && (
				<label htmlFor={name} className="font-bold text-gray-400 cursor-text">
					{label}
				</label>
			)}
			<input
				className={`w-full mt-1 px-3 py-1.5 text-lg text-dark-500 relative bg-white rounded-md border border-slate-300 outline-none placeholder:text-slate-400 focus:outline-none focus:border-primary-500 focus:ring focus:ring-primary-100 ${className}`}
				type={type ? type : "text"}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				required={required}
				autoComplete={autoComplete}
			/>
		</>
	);
};
