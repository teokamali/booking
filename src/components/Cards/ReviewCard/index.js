import React from "react";
import "./index.scss";

const ReviewCard = ({ image, name, countryFlag, country, review }) => {
	return (
		<div className='ReviewCard'>
			<div className='ReviewCard__header'>
				<img src={image} alt='avatar' />
				<div className='ReviewCard__header__info'>
					<span className='ReviewCard__header__info__name'>{name}</span>
					<div className='ReviewCard__header__info__country'>
						{/* <span className={`flag-icon flag-icon-us`}></span> */}
						<span className={`flag-icon flag-icon-${countryFlag}`}></span>
						<span>{country}</span>
					</div>
				</div>
			</div>
			<div className='ReviewCard__body'>
				<p>{`"${review}"`}</p>
			</div>
		</div>
	);
};

export default ReviewCard;
