import React from "react";
import "./index.scss";
const Loader = () => {
	return (
		<div className='lds-ellipsis'>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Loader;
