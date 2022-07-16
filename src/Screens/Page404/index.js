import React, { useState } from "react";
import Modal2 from "components/Modal2";
import { Button } from "components";
import Lottie from "react-lottie";
import * as animation404 from "assets/404.json";
import "./index.scss";

const Page404 = () => {
	const animation = {
		loop: true,
		autoplay: true,
		animationData: animation404,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<div className='page-404'>
			<Lottie
				style={{
					cursor: "unset",
					backgroundColor: "#ff3f3f",
				}}
				options={animation}
				isClickToPauseDisabled
			/>
		</div>
	);
};

export default Page404;
