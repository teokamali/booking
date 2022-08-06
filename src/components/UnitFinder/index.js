import { Button, Counter, Toastify } from "components";
import React, { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

import { useSearchedUnits } from "../../hooks/useSearch";
import "./index.scss";

const UnitFinder = ({ setSearchedUnits }) => {
	const { mutate: searchedUnits, data, isLoading } = useSearchedUnits();

	useEffect(() => {
		if (data) setSearchedUnits(data.data);
	}, [isLoading]);

	const [adult, setAdult] = useState(1);
	const [children, setChildren] = useState(0);
	const [checkMinDate, setCheckMinDate] = useState(new DateObject());
	const [checkIn, setCheckIn] = useState(null);
	const [checkOut, setCheckOut] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	const onSubmitHandler = (e) => {
		let params = {
			adults_count: adult,
			kids_count: children,
			check_in_date: checkIn.format("YYYY-MM-DD"),
			check_out_date: checkOut.format("YYYY-MM-DD"),
		};
		e.preventDefault();
		if (checkIn !== null && checkOut !== null) {
			searchedUnits({ id: 2, params: params });
			setIsOpen(false);
		} else {
			return Toastify("error", "Please Select Check-Out Date");
		}
	};
	const resetFormHandler = (e) => {
		e.preventDefault();
		setAdult(1);
		setChildren(0);
		setCheckMinDate(new DateObject());
		setCheckIn(null);
		setCheckOut(null);
	};
	return (
		<>
			{isOpen ? (
				<form onSubmit={onSubmitHandler} className='UnitFinder'>
					<div className='UnitFinder__header'>
						<button
							className='close'
							onClick={() => setIsOpen((prev) => setIsOpen(false))}
						>
							X
						</button>
					</div>
					<div className='UnitFinder__wrapper '>
						<button className='small-btn-main' onClick={resetFormHandler}>
							Reset
						</button>
						{/* date */}
						<div className='date-input'>
							<h5>Check In:</h5>
							<DatePicker
								portal
								inputClass='form-control'
								format='MMMM DD YYYY'
								minDate={checkMinDate}
								value={checkIn}
								onChange={(e) => {
									setCheckMinDate(e);
									setCheckIn(e);
								}}
							/>
						</div>

						<div className='date-input'>
							<h5>Check Out:</h5>
							<DatePicker
								portal
								inputClass='form-control'
								format='MMMM DD YYYY'
								minDate={checkMinDate}
								value={checkOut}
								onChange={(e) => setCheckOut(e)}
							/>
						</div>
						<div className='w-100'>
							<h5>Adults:</h5>
							<Counter value={adult} onValueChange={setAdult} />
						</div>
						<div className='w-100'>
							<h5>Children:</h5>
							<Counter value={children} onValueChange={setChildren} />
						</div>
						<Button
							hasBorder
							hasBoxShadow
							className='w-100'
							type='submit'
							isLoading={isLoading}
						>
							Search
						</Button>
					</div>
				</form>
			) : (
				<button
					className='search-filter'
					onClick={() => setIsOpen((prev) => setIsOpen(true))}
				>
					<i className='fas fa-calendar'></i>
				</button>
			)}
		</>
	);
};

export default UnitFinder;
