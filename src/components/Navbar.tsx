import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "./Breakpoints";

interface Props {
  sign: string | undefined;
  onDaySelect: (day: string) => void;
}

/**
 * Component that renders the navigation bar with links to view horoscopes for the selected day
 * @param sign The zodiac sign for which the horoscope is being displayed
 * @param onDaySelect Callback function to handle selection of the day to display
 */
function Navbar({ sign, onDaySelect }: Props) {
  return (
    <NavContainer>
      <NavLinkStyled
        to={`/dailyhoroscope/${sign?.toLowerCase()}/yesterday`}
        onClick={() => onDaySelect("yesterday")}>
        Yesterday
      </NavLinkStyled>
      <NavLinkStyled
        to={`/dailyhoroscope/${sign?.toLowerCase()}/today`}
        onClick={() => onDaySelect("today")}>
        Today
      </NavLinkStyled>
      <NavLinkStyled
        to={`/dailyhoroscope/${sign?.toLowerCase()}/tomorrow`}
        onClick={() => onDaySelect("tomorrow")}>
        Tomorrow
      </NavLinkStyled>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const NavLinkStyled = styled(NavLink)`
  color: white;
  background-color: black;
  font-family: "Tenor Sans", sans-serif;
  font-size: 1.1rem;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
  padding-right: 0.7rem;
  padding-left: 0.7rem;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.61);
  -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.61);
  cursor: pointer;

  &:hover {
    background-color: #f3e7dc;
    color: black;
  }

  &.active {
    background-color: grey;
  }

  @media ${device.mobileXXL} {
    font-size: 1rem;
  }
`;

export default Navbar;
