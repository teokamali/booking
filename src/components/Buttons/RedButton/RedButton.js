import React from "react";
import "./RedButton.scss";
function RedButton({ link = "/ ", text = "Text" }) {
  return (
    <a href={link} className="btn-red">
      {text}
    </a>
  );
}

export default RedButton;
