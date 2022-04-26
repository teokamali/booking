import React from "react";
import "./WhiteButton.scss";
function WhiteButton({ link = "/ ", text = "Text", className }) {
  return (
    <a href={link} className={`btn-white ${className}`}>
      {text}
    </a>
  );
}

export default WhiteButton;
