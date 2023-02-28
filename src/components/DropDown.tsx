import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TriangleArrow from '/assets/triangle-arrow.png';

const ZodiacDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedZodiac, setSelectedZodiac] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleZodiacSelect = (zodiac: string) => {
    setSelectedZodiac(zodiac);
    setShowDropdown(false);
  };

  const handleClickOutsideDropdown = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutsideDropdown);
    return () => window.removeEventListener('click', handleClickOutsideDropdown);
  }, []);

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

  return (
    <Dropdown ref={dropdownRef}>
      <DropdownButton onClick={() => setShowDropdown(!showDropdown)}>
        {selectedZodiac || 'Zodiac Sign'}
      <TriangleArrowIcon src={TriangleArrow} alt="arrow down icon" />
      </DropdownButton>
      <DropdownContent show={showDropdown}>
        {zodiacs.map((zodiac: string) => (
          <Link key={zodiac} to={`/dailyhoroscope/${zodiac.toLowerCase()}/today`}>
          <ZodiacSign key={zodiac} onClick={() => handleZodiacSelect(zodiac)}>
            {zodiac}
          </ZodiacSign>
          </Link>
        ))}
      </DropdownContent>
    </Dropdown>
  );
};

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
`;

const ZodiacSign = styled.div`
  padding: 0.4rem;
  &:hover {
    background-color: #F6F3EF;
    border-radius: 0.5rem;
  }
`;

