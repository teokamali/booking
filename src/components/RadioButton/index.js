import React from "react";
import "./index.scss";

function RadioButton({ data, onChangeValue, className, groupName, activeItem }) {
	const changeHandler = (e) => {
		onChangeValue(e.target.value);
	};

	return (
		<div className={`radioWrapper ${className}`}>
			{data.map((item, index) => {
				return (
					<div key={index} className='radioButton-custom'>
						<input
							id={`${groupName}-${index}`}
							type='radio'
							value={item.value}
							name={groupName}
							className='radio-custom'
							checked={item.value === activeItem}
							onChange={changeHandler}
						/>
						<label htmlFor={`${groupName}-${index}`} className='radio-label'>
							{item.label}
						</label>
					</div>
				);
			})}
		</div>
	);
}

export default RadioButton;
