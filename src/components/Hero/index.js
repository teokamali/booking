import React from "react";
import styled from "styled-components";

const Hero = ({
  children,
  background,
  overlayColor,
  className,
  height = "100vh",
}) => {
  const HeroSection = styled.div`
    position: relative;
    width: 100%;
    height: ${(props) => props.height};
    min-height: 700px;
    background-image: ${(props) => `url(${props.background})`};
    background-size: cover;
    background-position: 50% 50%;
    @media (max-width: 767px) {
      height: 150vh;
    }
  `;
  const HeroSectionOverlay = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    color: #ffff;
    background-color: ${overlayColor};
  `;
  return (
    <HeroSection background={background} className={className} height={height}>
      <HeroSectionOverlay>{children}</HeroSectionOverlay>
    </HeroSection>
  );
};

export default Hero;
