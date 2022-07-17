import React, { memo, useState, useRef } from "react";
import useClickOutside from "hooks/useClickedOutSide";
import "./index.scss";

function FilterTable({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const handleOpenList = (e) => {
		e.preventDefault();
		setIsOpen(true);
	};
	const handleCloseList = (e) => {
		e.preventDefault();
		setIsOpen(false);
	};
	const FillterRef = useRef(null);
	useClickOutside(FillterRef, handleCloseList);
	return (
		<div className='filter-wrapper' ref={FillterRef}>
			<button
				className='small-btn-main d-flex justify-content-between align-items-center'
				type='button'
				onClick={handleOpenList}
			>
				<span>Filter</span>
				<i className='fas fa-filter-list ms-2'></i>
			</button>
			<div className={`filter-list ${isOpen ? "show" : "hide"}`}>{children}</div>
		</div>
	);
}

export default memo(FilterTable);
