import jsCookie from "js-cookie";
import { useEffect, useState } from "react";
import { languages } from "../utils/Languages";

import Footer from "../components/Footer";
import "./Layout.scss";

const ScrollToTop = () => {
	return (
		<span className='scroll-to-top' onClick={() => window.scrollTo(0, 0)}>
			<i className='fas fa-arrow-up'></i>
		</span>
	);
};

function Layout({ children }) {
	const currentlanguageCode = jsCookie.get("i18next") || "en";
	const currentLanguage = languages.find((lang) => lang.code === currentlanguageCode);
	const [isScrollable, setIsScrollable] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () =>
			window.scrollY > 930 ? setIsScrollable(true) : setIsScrollable(false)
		);
	}, [window.scrollY]);
	useEffect(() => {
		document.body.dir = currentLanguage.dir || "ltr";
	}, [currentLanguage]);

	return (
		<div className={`main-layout`} id='main-layout'>
			<div className='main-content'>{children}</div>
			<Footer />
			{/* <CopyRight /> */}
			{isScrollable ? <ScrollToTop /> : null}
		</div>
	);
}

export default Layout;
