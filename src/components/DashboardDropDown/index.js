import React, { useState } from "react";
import styled from "styled-components";

const DashboardDropDown = ({ icon, defaultOption, data, onItemClick }) => {
  const [isActived, setIsActicved] = useState(false);
  const onOpenDropDown = () => {
    setIsActicved((sag) => !sag);
  };
  return (
    <Container>
      <Selected onClick={onOpenDropDown}>
        <p>Select</p>
        <span>{"<"}</span>
      </Selected>
      <Options visibility={isActived}>
        <li> something</li>
        <li> something else</li>
        <li> something different</li>
      </Options>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  * {
    margin: 0 !important;
    padding: 0 !important;
  }
`;

const Selected = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px !important;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: lightgrey;
  }
  span {
    transform: rotate(-90deg);
  }
`;

const Options = styled.ul`
  visibility: ${(props) => (props.visibility ? "visible" : "hidden")};
  display: flex;
  position: absolute;
  left: 0;
  top: 45px;
  flex-direction: column;
  margin-top: 4px !important;
  padding: 8px 16px !important;
  border-radius: 8px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.12);
  li {
    list-style-type: none;
    margin: 4px 0 !important;
    width: 100%;
  }
`;
export default DashboardDropDown;
