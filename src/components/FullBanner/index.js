import React from "react";
import "./index.scss";

function FullBanner({ image, alt, children }) {
	return (
		<div className='fullBanner'>
			<img className='fullBanner-img' src={image} alt={alt} />
			<div className='fullBanner-content'>{children}</div>
		</div>
	);
}

export default FullBanner;
