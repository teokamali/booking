import React from "react";
import "./WhiteButton.scss";
function WhiteButton({ link = "/ ", text = "Text" }) {
  return (
    <a href={link} className="btn-white">
      {text}
    </a>
  );
}

export default WhiteButton;
