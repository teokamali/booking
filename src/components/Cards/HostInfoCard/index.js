import React from "react";
import avatar from "assets/image/avatars/9.jpg";
import "./index.scss";
const HostInfoCard = () => {
	return (
		<div className='host__info__card'>
			<div className='host__info__card__header'>
				<span className='host__info__card__header__name'>Host Information</span>
			</div>
			<div className='host__info__card__body'>
				<div className='host__info__card__body__avatar'>
					<img src={avatar} alt='' />
					<span>Mamad</span>
					<div>
						<span>Host Review Score</span>
						<span className='host__info__card__header__score'>
							9.6 <i className='fa-solid fa-star'></i>
						</span>
					</div>
				</div>
				<div className='host__info__card__body__description'>
					<p>
						Situé au tout début du cours Charlemagne entre la nouvelle Confluence et la
						Presqu'île historique, notre appartement rénové vous accueille pour un
						séjour de travail ou de loisirs. Avec 4 lits séparés, c'est parfait pour 4
						professionnels ou une famille. Les serviettes de toilettes et les draps sont
						fournis. A deux pas de Perrache avec les accès métros, tramway et train.
						L'appartement dispose également d'une place de parking en sous/sol.
					</p>
					<p>
						Passionnés par la décoration, l'immobilier et par les gens d'une manière
						générale, nous aimons recevoir et faire plaisir. Nous avons voulu créer un.
					</p>
				</div>
			</div>
		</div>
	);
};

export default HostInfoCard;
