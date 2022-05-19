import React from "react";
import {
  Hero,
  FullNavBar,
  Banner,
  HambergurMenu,
  LoginModal,
} from "components";
import backgroundImage from "assets/image/about-hero.png";
import { Desktop, Mobile, Tablet } from "layout/BreakPoints";
import { useAuth } from "hooks/useAuth";
import about1 from "assets/image/house.jpg";
import BannerImage from "assets/image/AboutusBanner.png";
import "./AboutUs.scss";
const AboutUs = () => {
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
      <div className="about-container container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
          velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius
          duis faucibus et molestie ac feugiat sed lectus vestibulum.
          Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget.
          Dictum varius duis faucibus et molestie ac feugiat sed lectus
        </p>
        <div className="about-image-wrapper">
          <img src={about1} alt="" />
        </div>
      </div>
      <div className="mt-5 ">
        <Banner
        
          image={BannerImage}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
          titile="tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat"
        />
      </div>
      <div className="about-container container">
        <div className="about-image-wrapper">
          <img src={about1} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
          velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius
          duis faucibus et molestie ac feugiat sed lectus vestibulum.
          Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget.
          Dictum varius duis faucibus et molestie ac feugiat sed lectus
        </p>
      </div>
      <div className="container">
        <p className="about-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
          velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius
          duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam
          maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti
          nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet
          facilisis magna. Dignissim diam quis enim lobortis scelerisque
          fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare
          lectus sit amet est placerat in egestas erat. Nisi vitae suscipit
          tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed
          turpis tincidunt id aliquet.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
