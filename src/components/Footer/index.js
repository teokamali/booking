import React from "react";
import Logo from "assets/image/logo.png";
import house from "assets/image/house.png";
import InstagramFeedCard from "components/Cards/InstagarmFeedCard";
import "./index.scss";
function Foorter() {
	return (
		<>
			<footer className='footer-container'>
				<div className='footer-wrapper'>
					<div className='row row-wrapper justify-content-center'>
						<div className='col-12  col-lg-3'>
							<div className='footer-column-1'>
								<img className='footer-logo' src={Logo} alt='Logo' />
								<p className='footer-desc'>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
									aspernatur, natus sapiente recusandae saepe hic eaque? Debitis
									repudiandae excepturi laboriosam!
								</p>
								<div className='social-medias'>
									<ul className='social-medias-list'>
										<li className='social-medias-item'>
											<a href='/'>
												<i className='fa-brands fa-facebook-f'></i>
											</a>
										</li>
										<li className='social-medias-item'>
											<a href='/'>
												<i className='fa-brands fa-instagram'></i>
											</a>
										</li>
										<li className='social-medias-item'>
											<a href='/'>
												<i className='fa-brands fa-twitter'></i>
											</a>
										</li>
										<li className='social-medias-item'>
											<a href='/'>
												<i className='fa-brands fa-youtube'></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='col-12  col-lg-3'>
							<div className='footer-column-2'>
								<h4>Our Website Pages Link</h4>
								<div className='site-links-wrapper'>
									<ul className='site-links'>
										<li>
											<a href='/'> Home </a>
										</li>
										<li>
											<a href='/'> About </a>
										</li>
										<li>
											<a href='/'> Blog </a>
										</li>
										<li>
											<a href='/'> Hotel </a>
										</li>
										<li>
											<a href='/'> Hiring </a>
										</li>
									</ul>
									<ul className='site-links'>
										<li>
											<a href='/'> Home </a>
										</li>
										<li>
											<a href='/'> About </a>
										</li>
										<li>
											<a href='/'> Blog </a>
										</li>
										<li>
											<a href='/'> Hotel </a>
										</li>
										<li>
											<a href='/'> Hiring </a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='col-12  col-lg-3'>
							<div className='footer-column-3'>
								<h4 className='Instagram-title'>Our latest Post on Instagram</h4>
								<div className='row g-0 instagram-posts-wrapper'>
									<div className='col-4 single-card-wrapper'>
										<InstagramFeedCard
											image={house}
											link='https://www.google.com'
										/>
									</div>
									<div className='col-4 single-card-wrapper'>
										<InstagramFeedCard
											image={house}
											link='https://www.google.com'
										/>
									</div>
									<div className='col-4 single-card-wrapper'>
										<InstagramFeedCard
											image={house}
											link='https://www.google.com'
										/>
									</div>
									<div className='col-4 single-card-wrapper'>
										<InstagramFeedCard
											image={house}
											link='https://www.google.com'
										/>
									</div>
									<div className='col-4 single-card-wrapper'>
										<InstagramFeedCard
											image={house}
											link='https://www.google.com'
										/>
									</div>
									<div className='col-4 single-card-wrapper'>
										<InstagramFeedCard
											image={house}
											link='https://www.google.com'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Foorter;
