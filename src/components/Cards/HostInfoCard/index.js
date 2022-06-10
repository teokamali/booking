import React from "react";
import "./index.scss";

const HostInfoCard = ({ data }) => {
	const { property_cover_image, user, ratings_average, subtitle } = data;
	return (
		<div className='host__info__card'>
			<div className='host__info__card__header'>
				<span className='host__info__card__header__name'>Host Information</span>
			</div>
			<div className='host__info__card__body'>
				<div className='host__info__card__body__avatar'>
					<img src={property_cover_image.medium_file_path} alt='' />
					<span>{user.first_name + " " + user.last_name}</span>
					<div>
						<span>Host Review Score</span>
						<span className='host__info__card__header__score'>
							{ratings_average} <i className='fa-solid fa-star'></i>
						</span>
					</div>
				</div>
				<div className='host__info__card__body__description'>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nulla
						consequuntur iure. Facere perferendis perspiciatis ducimus, fuga, rerum
						laboriosam cupiditate, ipsum ratione tempora illo assumenda et delectus? Eos
						placeat tenetur alias rerum, id, nostrum molestiae odio quibusdam, quia
						similique iusto?
					</p>
				</div>
			</div>
		</div>
	);
};

export default HostInfoCard;
