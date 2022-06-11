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
	const [checkIn, setCheckIn] = useState(new DateObject().format("YYYY-MM-DD"));
	const [checkOut, setCheckOut] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	const onSubmitHandler = (e) => {
		let params = {
			adults_count: adult,
			kids_count: children,
			check_in_date: checkIn,
			check_out_date: checkOut,
		};
		e.preventDefault();
		if (checkIn !== null && checkOut !== null) {
			searchedUnits({ id: 2, params: params });
			setIsOpen(false);
		} else {
			return Toastify("error", "Please Select Check-Out Date");
		}
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
						{/* date */}
						<div className='date-input'>
							<h5>Check In:</h5>
							<DatePicker
								inputClass='form-control'
								format='MMMM DD YYYY'
								minDate={checkIn}
								onChange={(e) => setCheckIn(e.format("YYYY-MM-DD"))}
							/>
						</div>

						<div className='date-input'>
							<h5>Check Out:</h5>
							<DatePicker
								inputClass='form-control'
								format='MMMM DD YYYY'
								minDate={checkIn}
								onChange={(e) => setCheckOut(e.format("YYYY-MM-DD"))}
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
