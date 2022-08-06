import React from "react";
import Button from "../Button";
import "./index.scss";

function CallToAction() {
  return (
    <div className="CallToAction">
      <div className="CallToAction__header">
        <span>
          Relax in one of our luxury hotels
          <br />
          We make happy moments for you
        </span>
      </div>
      <div className="CallToAction__body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ulabore et dolore magna aliqua Egestas purus
          viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus
          aenean vel elit scelerisqueLorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ulabore et dolore
          magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus
          vitae congue mauris rhoncus aenean vel elit scelerisque
        </p>
      </div>
      <div className="CallToAction__footer">
        <Button isLarge hasBorder>
          Explore rooms
        </Button>
        <Button hasBorder>Explore rooms</Button>
      </div>
    </div>
  );
}

export default CallToAction;
