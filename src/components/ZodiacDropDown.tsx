import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import TriangleArrow from '/assets/triangle-arrow.png';

/** Zodiac Drop Down
 * A component that renders a drop down list for selecting a particular zodiac sign */

interface Props {
  label: string; // string that will be displayed on the button that toggles the drop down
}

const ZodiacDropdown: React.FC<Props> = ({ label }) => {
  const [showDropdown, setShowDropdown] = useState(false); // manages whether or not the drop down is currently being shown
  const [selectedZodiac, setSelectedZodiac] = useState<string | null>(null); //manages which zodiac sign has been selected
  const dropdownRef = useRef<HTMLDivElement>(null); // creates references to the dropdown container
  const dropdownContentRef = useRef<HTMLDivElement>(null); // creates references to the dropdown content container
  const { day } = useParams<{ day: string}>(); // gets the day parameter from the current URL

  // gets called when the user selects a zodiac sign from the dropdown list
  // updates the ZelectedZodiac state variable and hides the dropdown list
  const handleZodiacSelect = (zodiac: string) => {
    setSelectedZodiac(zodiac);
    setShowDropdown(false);
  };
  
  // adds an event listener to the window to handle clicking outside of the dropdown to close it
  useEffect(() => {
    const handleClickOutsideDropdown = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    window.addEventListener('click', handleClickOutsideDropdown);
    return () => window.removeEventListener('click', handleClickOutsideDropdown);
  }, []);

  // resets the dropdown and deselects the selected zodiac sign 
  // if the dropdown is being shown and a zodiac sign has been selected
  useEffect(() => {
    if (dropdownContentRef.current && showDropdown && selectedZodiac !== null) {
      setShowDropdown(false);
      setSelectedZodiac(null);
    }
  }, [showDropdown, selectedZodiac]);

  // scrolls down the dropdown content when the user clicks on it
  const handleScrollDown = () => {
    console.log(dropdownRef.current)

    const dropdownContent = dropdownRef.current?.querySelector('.dropdown-content');
    if (dropdownContent) {
      dropdownContent.scrollTop += 50; //scrolls the dropdown list down by 50px
    }
  };

  // array of the names of the zodiac signs displayed in the drop down list
  const zodiacs = [
    'Aries',
    'Taurus',    
    'Gemini',    
    'Cancer',    
    'Leo',    
    'Virgo',    
    'Libra',    
    'Scorpio',    
    'Sagittarius',    
    'Capricorn',    
    'Aquarius',    
    'Pisces'
    ];

  /** zodiac signs drop down list
  * contains links to the daily horoscope page for each zodiac sign
  * the links are created using the map function on the names of the zodiacs signs array above 
  * clicking on a zodiac sign calls the handleZodiacSelect function with the corresponding zodiac sign as an argument */

  return (
    <Dropdown ref={dropdownRef}>
      <DropdownButton onClick={() => setShowDropdown(!showDropdown)}>
        {label}
        <TriangleArrowIcon src={TriangleArrow} alt="arrow down icon" />
      </DropdownButton>
      <DropdownContent show={showDropdown} onClick={handleScrollDown}>
        {zodiacs.map((zodiac: string) => (
          <ZodiacLink key={zodiac} to={`/dailyhoroscope/${zodiac.toLowerCase()}/${day || 'today'}`}>
          <ZodiacSign key={zodiac} onClick={() => handleZodiacSelect(zodiac)}>
            {zodiac}
          </ZodiacSign>
          </ZodiacLink>
        ))}
      </DropdownContent>
    </Dropdown>
  );
};


//-------------Styling-------------//

export default ZodiacDropdown;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  font-family: 'Tenor Sans', sans-serif;
  border: 0.08rem solid;
  border-radius: 0.5rem;
  width: 10rem;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TriangleArrowIcon = styled.img`
    height: 1.2rem;
`; 

export const ZodiacLink = styled(Link)`
   color: #000000;
   text-decoration: none;
`;

const DropdownContent = styled.div`
  display: ${(props: { show: boolean }) => (props.show ? 'block' : 'none')};
  position: absolute;
  z-index: 1;
  background-color: #ffffff;
  min-width: 10rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);
  padding: 0.75rem 1rem;
  margin-top: 0.5rem;
  font-family: 'Tenor Sans', sans-serif;
  border-radius: 0.5rem;
  font-size: 1rem;
  max-height: 12rem;
  overflow: auto;
  scroll-behavior: smooth;
`;

const ZodiacSign = styled.div`
  padding: 0.4rem;
  &:hover {
    background-color: #F6F3EF;
    border-radius: 0.5rem;
  }
`;