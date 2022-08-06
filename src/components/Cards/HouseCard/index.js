import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button";
import "./index.scss";
function HouseCard({ id, name, image, description, maxGuests, maxBedrooms, startPrice }) {
	return (
		<Link to={`hotel/${id}`} className='house__card-link'>
			<div className='house__card'>
				<div className='house__card__header'>
					<img src={image} alt='House' />
				</div>
				<div className='house__card__body'>
					<h3>{name}</h3>
					<p className='house__card__body__subtitle'>{description}</p>
					<div className='house__card__body__features'>
						<span className='house__card__body__features__button'>
							<i className='fa-light fa-bed-front'></i>
							<span>{maxBedrooms}</span>
							Bedrooms
						</span>
						<span className='house__card__body__features__button'>
							<i className='fa-thin fa-users'></i>
							<span>{maxGuests}</span>
							Guests
						</span>
					</div>
				</div>
				<div className='house__card__footer'>
					<div className='house__card__footer__price'>
						<span>
							From <strong>{startPrice}$</strong>
							<small>/night</small>
						</span>
					</div>
					<Button hasBorder>Book Now</Button>
				</div>
			</div>
		</Link>
	);
}

export default HouseCard;
