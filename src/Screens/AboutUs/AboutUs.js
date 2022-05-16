import React from "react";
import {
  Hero,
  FullNavBar,
  HambergurMenu,
  LoginModal,
  DynamicImage,
} from "components";
import backgroundImage from "assets/image/about-hero.png";
import { Desktop, Mobile, Tablet } from "../../layout/BreakPoints";
import { useAuth } from "../../hooks/useAuth";
const AboutUs = () => {
  const { isUserLoggedIn } = useAuth();
  const gallery = [
    "https://images.unsplash.com/photo-1499198116522-4a6235013d63?auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1492760864391-753aaae87234?auto=format&fit=crop&w=1336&q=80",
    "https://images.unsplash.com/photo-1503631285924-e1544dce8b28?auto=format&fit=crop&w=1234&q=80",
    "https://images.unsplash.com/photo-1510425463958-dcced28da480?auto=format&fit=crop&w=1352&q=80",
    "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1234&q=80",
  ];
  return (
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
  );
};

export default AboutUs;
