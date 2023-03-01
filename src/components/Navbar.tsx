import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from './Breakpoints';


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
  align-items: center;
  flex-wrap: wrap;
  margin: 1rem 0;
  background: #FFFFFF;
  height: 4rem;
  margin-top: 0.5rem;
  -webkit-box-shadow: 0 0.625rem 0.375rem -0.375rem rgba(0,0,0,0.37);
  -moz-box-shadow: 0 0.625rem 0.375 -0.375rem rgba(0,0,0,0.37);
  box-shadow: 0 0.625rem 0.375 -0.375rem rgba(0,0,0,0.37);
`;

const NavLinkStyled = styled(NavLink)`
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: black;
  border-radius: 5px;
  margin: 0 1rem;
  font-weight: 400;
  /*text-transform: uppercase;*/
  font-size: 1.125rem;

  &:hover {
    background-color: #F6F3EF;
  }

  &.active {
    text-underline-offset: 0.3rem;
    text-decoration: underline;
  }

  @media ${device.mobileXL} {
      font-size: 1rem;
    }  

    @media ${device.mobileL} {
      font-size: 0.9rem;
      margin-left: 0.6rem;
      margin-right: 0.6rem;
    }
`;

export default Navbar;
