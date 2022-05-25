import { memo } from "react";
import { Loader } from "components";
import styled from "styled-components";
function Button({
  children = "TEXT",
  onClick,
  isPrimary,
  isBold,
  isWhite,
  isLarge,
  hasBoxShadow,
  hasBorder,
  className,
  isLoading,
  disabled,
  id,
  type = "submit",
}) {
  const ButtonEl = styled.button`
    white-space: nowrap;
    padding: ${(props) => (props.isLarge ? "26px 38px" : "18px 24px")};
    font-size: ${(props) => (props.isLarge ? "18px" : "16px")};
    color: ${(props) => (props.isPrimary ? "#191919" : "#ffff")};
    font-weight: ${(props) => (props.isBold ? "bold" : "400")};
    background-color: ${(props) => (props.isWhite ? "#fff" : "#ff3f3f")};
    background-color: ${(props) => (props.disabled ? "#fff" : "#ff3f3f")};
    outline: none;
    border-radius: 36px;
    border: ${(props) => (props.hasBorder ? "1px solid #eeeeee" : "0")};
    box-shadow: ${(props) =>
      props.hasBoxShadow ? "0px 4px 10px rgba(20, 20 ,40, .04)" : "none"};
    transition: all 200ms ease-in-out;
    pointer-events: ${(props) => props.disabled && "none"};
    &:hover {
      color: ${(props) => (props.isPrimary ? "#fff" : "#191919")};
      background-color: ${(props) => (props.isWhite ? "#ff3f3f" : "#fff")};
    }
  `;
  return (
    <ButtonEl
      className={className}
      onClick={onClick}
      isLarge={isLarge}
      isPrimary={isPrimary}
      isBold={isBold}
      isWhite={isWhite}
      disabled={disabled}
      hasBoxShadow={hasBoxShadow}
      hasBorder={hasBorder}
      id={id}
    >
      {isLoading ? <Loader /> : children}
    </ButtonEl>
  );
}

export default memo(Button);
