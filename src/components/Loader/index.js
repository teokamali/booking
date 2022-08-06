import React from "react";
import "./index.scss";
const Loader = ({ background = "#fff" }) => {
	return (
		<div className='lds-ellipsis'>
			<div style={{ backgroundColor: background }}></div>
			<div style={{ backgroundColor: background }}></div>
			<div style={{ backgroundColor: background }}></div>
			<div style={{ backgroundColor: background }}></div>
		</div>
	);
};

export default Loader;
