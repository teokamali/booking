import React from "react";
import "./index.scss";
const Counter = ({ value, onValueChange, min = 0 }) => {
	return (
		<div className='counter'>
			<button
				type='button'
				className={`counter__negative ${value <= min ? "counter-deactive" : ""} `}
				onClick={() => value > min && onValueChange((prev) => prev - 1)}
			>
				-
			</button>
			<span>{value}</span>
			<button
				className='counter__plus'
				onClick={() => onValueChange((prev) => prev + 1)}
				type='button'
			>
				+
			</button>
		</div>
	);
};

export default Counter;
