import styled from "styled-components";
import { Button } from "./Button";

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
      <Button to={`/dailyhoroscope/${sign?.toLowerCase()}/yesterday`} onClick={() => onDaySelect('yesterday')}>Yesterday</Button>
      <Button to={`/dailyhoroscope/${sign?.toLowerCase()}/today`} onClick={() => onDaySelect('today')}>Today</Button>
      <Button to={`/dailyhoroscope/${sign?.toLowerCase()}/tomorrow`} onClick={() => onDaySelect('tomorrow')}>Tomorrow</Button>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

export default Navbar;
