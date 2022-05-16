import React from "react";
import styled from "styled-components";
import "./index.scss";
function DynamicImage({ gallery }) {
  const StyledA = styled.a`
    background-image: ${(props) => `url(${props.image})`}; ;
  `;
  return (
    <div className="dynamic-image ">
      <div className="gallery-wrap">
        {gallery.map((item, i) => (
          <StyledA
            key={i}
            image={item}
            href="/"
            className="item item-1"
          ></StyledA>
        ))}
      </div>
    </div>
  );
}

export default DynamicImage;
