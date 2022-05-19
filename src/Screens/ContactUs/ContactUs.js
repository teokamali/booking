import React from "react";
import {
  Hero,
  FullNavBar,
  HambergurMenu,
  LoginModal,
  Button,
  Banner,
} from "components";
import { Desktop, Tablet, Mobile } from "layout/BreakPoints";
import { useAuth } from "hooks/useAuth";
import backgroundImage from "assets/image/contact-us-hero.png";
import formImage from "assets/image/contact-form.png";
import BannerImage from "assets/image/contact-us-banner.png";
import "./ContactUs.scss";

const ContactUs = () => {
  const { isUserLoggedIn } = useAuth();
  return (
    <>
      <Hero
        background={backgroundImage}
        overlayColor="rgba(0, 0, 0, 0.65)"
        height="50vh"
      >
        <Desktop>
          <FullNavBar Modal={LoginModal} isUserLoggedIn={isUserLoggedIn} />
        </Desktop>
        <Tablet>
          <HambergurMenu Modal={LoginModal} isUserLoggedIn={isUserLoggedIn} />
        </Tablet>
        <Mobile>
          <HambergurMenu Modal={LoginModal} isUserLoggedIn={isUserLoggedIn} />
        </Mobile>
      </Hero>
      <div className="container my-4">
        <div className="row">
          <div className="col-12 col-lg-6 contactus-first-col">
            <form>
              {/* name */}
              <div className="form-floating w-100 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Name"
                />
                <label htmlFor="floatingInput">Name</label>
              </div>
              {/* email */}
              <div className="form-floating w-100 mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Email"
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              {/* title */}
              <div className="form-floating w-100 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Title"
                />
                <label htmlFor="floatingInput">Title</label>
              </div>
              {/* message */}
              <textarea
                className="form-control"
                placeholder="Message"
                cols="50"
                rows="10"
              />
              <Button isBold hasBorder className="w-100 mt-3">
                submit
              </Button>
            </form>
          </div>
          <div className="col-12 col-lg-6 contactus-seconde-col d-none d-lg-block">
            <img className="contact-from-image" src={formImage} alt="" />
          </div>
        </div>
      </div>
      <Banner image={BannerImage}></Banner>
      <div className="container contactus-information-wrapper">
        <h4>Information</h4>
        <div className="row contactus-information">
          <div className="col-12 col-md-6 map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25399.164234061245!2d49.56768381944578!3d37.27390436071769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ff562135168f06b%3A0xaa23b3a39c2836bf!2sDistirct%202%2C%20Rasht%2C%20Gilan%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1652953014543!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 col-md-6 information">
            <span>Phone number : +14641646164633</span>
            <span>Phone number : +14641646164633</span>
            <span>
              Address:
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                congue mauris rhoncus aenean vel elit scelerisque. In egestas
                erat imperdiet sed euismod nisi porta lorem mollis. Morbi
                tristique senectus et netus. Mattis pellentesque id nibh tortor
                id aliquet lectus proin. Sapien faucibus et molestie ac feugiat
                sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi
                tincidunt ornare massa eget. Dictum varius duis
              </p>
            </span>
            <Button
              isBold
              isWhite
              isPrimary
              hasBorder
              hasBoxShadow
              className="mb-3"
            >
              WHATSAPP
            </Button>
            <Button
              isBold
              isWhite
              isPrimary
              hasBorder
              hasBoxShadow
              className="mb-3"
            >
              TELEGRAM
            </Button>
            <Button
              isBold
              isWhite
              isPrimary
              hasBorder
              hasBoxShadow
              className="mb-3"
            >
              INSTAGRAM
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
