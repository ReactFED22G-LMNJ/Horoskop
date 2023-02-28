import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
      <NavLinkStyled to={`/dailyhoroscope/${sign?.toLowerCase()}/yesterday`} onClick={() => onDaySelect('yesterday')}>Yesterday</NavLinkStyled>
      <NavLinkStyled to={`/dailyhoroscope/${sign?.toLowerCase()}/today`} onClick={() => onDaySelect('today')}>Today</NavLinkStyled>
      <NavLinkStyled to={`/dailyhoroscope/${sign?.toLowerCase()}/tomorrow`} onClick={() => onDaySelect('tomorrow')}>Tomorrow</NavLinkStyled>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const NavLinkStyled = styled(NavLink)`
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #fff;
  background-color: black;
  border-radius: 5px;
  margin: 0 1rem;

  &:hover {
    background-color: #283593;
  }

  &.active {
    background-color: grey;
  }
`;

export default Navbar;
