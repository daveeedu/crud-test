import React, { useState } from "react";

const Input = ({
	id,
	name,
	placeholder,
	value,
	onChange,
	onBlur,
	onFocus,
	onClick,
	type,
	inputClass = "",
	wrapperClass = "",
	disabled = false,
	inputC,
	children
}) => {
	return (
		<div className={`custom-input mt-3 text-start ${wrapperClass}`}>
			<div className={`flex items-center input_wrapper mb-1 p-0 ${inputClass}`}>
				<input
					className={`w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${inputC}`}
					type={(type || "text")}
					name={name}
					onClick={onClick}
					value={value}
					onBlur={onBlur}
					onFocus={onFocus}
					id={id || name}
					placeholder={placeholder}
					onChange={onChange}
					disabled={disabled}
				/>
				{children}
			</div>
			
		</div>
	);
};
export default Input;
