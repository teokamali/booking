import React, { useState } from "react";
import { Button } from "components";
import "./index.scss";

const UnitCard = ({ data, buttonOnClick }) => {
	const { name, adults_sleeps_count, bedrooms_count, description, id, kids_sleeps_count, price } =
		data;
	const [active, setIsActive] = useState(false);

	return (
		<main id='unitcard'>
			<div className='unitcard__wrapper'>
				<div className='unitcard'>
					<div className='unitcard__informations'>
						<h5 className='unitcard__informations__title'>{name}</h5>
						<div className='unitcard__informations__icons'>
							<span>
								<i className='fas fa-user'></i>
								Adults
								<small>{adults_sleeps_count}X</small>
							</span>
							<span>
								<i className='fas fa-door-closed'></i>
								Bedrooms
								<small>{bedrooms_count}X</small>
							</span>
							<span>
								<i className='fas fa-child'></i>
								Kids
								<small>{kids_sleeps_count}X</small>
							</span>
						</div>
					</div>
					<div className='unitcard__price'>
						<p>{price}$/Night</p>
						<Button isWhite isPrimary hasBorder hasBoxShadow onClick={buttonOnClick}>
							Reserve Now
						</Button>
					</div>
					<i
						className={`fas fa-chevron-right openDescription ${active ? "active" : ""}`}
						onClick={() => setIsActive((prev) => !prev)}
					></i>
				</div>
				<div
					className='description'
					style={
						active ? { height: "100%", opacity: "1" } : { height: "0px", opacity: "0" }
					}
				>
					<div dangerouslySetInnerHTML={{ __html: description }}></div>
				</div>
			</div>
		</main>
	);
};

export default UnitCard;
