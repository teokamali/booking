import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import Button from "../Button";
import DashboardDropDownWithIcon from "../DashboardDropDownWithIcon";
import { UserContext } from "context/UsersContextProvider";
import "./index.scss";
const navList = [
	{ id: 1, link: "/", title: "Home" },
	{ id: 2, link: "/about-us", title: "About" },
	{ id: 3, link: "/blog", title: "Blog" },
	{ id: 4, link: "/contact-us", title: "Contact Us" },
];
function FullNavBar({ Modal, isUserLoggedIn }) {
	const { user, setUser } = useContext(UserContext);
	return (
		<>
			<header className='full-navbar'>
				<div className='row'>
					<div className='first-row col-6'>
						<div className='full-nav-logo'>
							<img src={logo} alt='logo' />
						</div>
					</div>
					<div className='seconde-row col-6'>
						<nav>
							<ul>
								{navList.map((nav) => (
									<li key={nav.id}>
										<Link to={nav.link}>{nav.title}</Link>
									</li>
								))}
							</ul>
						</nav>
						{isUserLoggedIn ? (
							<DashboardDropDownWithIcon data={user.userInformation.first_name} />
						) : (
							<Modal />
						)}

						<div className='favorites'>
							<span className='counter'>0</span>
							<i className='fa-regular fa-heart heart-icon'></i>
						</div>
						<Button isBold>Book Now</Button>
					</div>
				</div>
			</header>
		</>
	);
}

export default FullNavBar;
