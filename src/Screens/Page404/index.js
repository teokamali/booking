import React, { useState } from "react";
import Modal2 from "components/Modal2";
import { Button } from "components";

const Page404 = () => {
	const [isOpen, setisOpen] = useState(false);
	return (
		<div>
			<button onClick={() => setisOpen(true)}>open Modal</button>
			<Modal2
				id='modal1'
				title='Modal Mamad'
				onClose={() => setisOpen(false)}
				isOpen={isOpen}
			></Modal2>
		</div>
	);
};

export default Page404;
