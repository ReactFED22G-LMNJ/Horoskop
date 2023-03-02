import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "./Breakpoints";

interface Props {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  hoverColor?: string;
}

export function Button({ to = "", children, hoverColor }: Props) {
  return <StyledButton to={to} hoverColor={hoverColor}>{children}</StyledButton>;
}

//-------------Styling-------------//

const StyledButton = styled(NavLink)<{ hoverColor?: string }>`
  color: #FFFFFF;
  background-color: #000000;
  font-family: "Tenor Sans", sans-serif;
  font-size: 1.1rem;
  border-radius: 0.5rem;
  border: none;
  margin: 1rem;
  padding: 0.5rem;
  padding-right: 0.7rem;
  padding-left: 0.7rem;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.61);
  -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.61);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: ${props => props.hoverColor || '#FFFFFF'}; 
    color: #000000;
  }

  @media ${device.mobileXXL} {
        font-size: 1rem;
    }
`;
