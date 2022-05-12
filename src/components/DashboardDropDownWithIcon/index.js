import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";

const DashboardDropDownWithIcon = ({ icon, data, onItemClick }) => {
  const [isActived, setIsActicved] = useState(false);
  const onOpenDropDown = () => {
    setIsActicved((sag) => !sag);
  };
  return (
    <Container>
      <Selected onClick={onOpenDropDown}>
        <i className="fa-regular fa-circle-user"></i>
      </Selected>
      <Options heyt={isActived}>
        <li>
          <Link to="/dashboard">dashboard</Link>
        </li>
        <li>
          <Link to="/">setting</Link>
        </li>
        <li>
          <Link to="/">reservations</Link>
        </li>
        <li>
          <Button className="w-100">log out</Button>
        </li>
      </Options>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 991px) {
    position: relative;
  }
  color: #333;
`;

const Selected = styled.div`
  border-radius: 8px;
  cursor: pointer;
  i {
    font-size: 1.7rem;
  }
`;

const Options = styled.ul`
  transform: ${(props) => (props.heyt ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top center;
  transition: all 200ms ease-in-out;
  background-color: #fff;
  border-radius: 24px;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  padding: 0.7rem !important;
  flex-direction: column;
  margin-top: 4px !important;
  border: 1px solid rgba(0, 0, 0, 0.5);
  top: calc(100% + 16px);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.12);
  @media (min-width: 991px) {
    width: 200px;
    right: 0;
    left: unset;
    top: 61px;
  }
  li {
    list-style-type: none;
    margin: 4px 0 !important;
    width: 100%;
    a {
      padding: 0 8px;
    }
  }
`;
export default DashboardDropDownWithIcon;
