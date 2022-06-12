import React from "react";
import "./index.scss";
const Counter = ({ value, onValueChange }) => {
	return (
		<div className='counter'>
			<button
				type='button'
				className='counter__negative'
				onClick={() => value > 0 && onValueChange((prev) => prev - 1)}
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
