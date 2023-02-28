import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "./Breakpoints";

interface Props {
  children: React.ReactNode;
  to: string;
}

export function Button({ to, children}: Props) {
  return <Btn to={``}>{children}</Btn>;
}

//-------------Styling-------------//

const Btn = styled(NavLink)`
    color: white;
    background-color: black;
    font-family: 'Tenor Sans', sans-serif;
    font-size: 1.1rem;
    border-radius: 0.5rem;
    border: none;
    padding: 0.5rem;
    padding-right: 0.7rem;
    padding-left: 0.7rem;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.61);
    -webkit-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.61);
    -moz-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.61);
    cursor: pointer;

    &:hover {
        background-color: #F3E7DC;
        color: black;
    }

    &.active {
    background-color: grey;
  }

    @media ${device.mobileXXL} {
        font-size: 1rem;
    }
`;


