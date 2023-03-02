import styled from 'styled-components';
import { device } from '../data/Breakpoints';


interface Props {
    image: string;
    name: string;
    color: string;
    date: string;
    onClick?: () => void;
}

/**
 * Zodiac Sign Card 
 * @param name, image, color, date, onClick (Props)
 * @returns a component that renders a zodiac sign card with parameters above passed in as Props
 */

function ZodiacSignCard({ name, image, color, date, onClick }: Props) {
  return (
      <ZodiacSignColumn color={color}>
        <ZodiacCircle color={color}>
          <Img src={image} alt={name} onClick={onClick} /> 
        </ZodiacCircle>
        <Name color={color}>{name}</Name>
        <DateText>{date}</DateText>
      </ZodiacSignColumn>
  );
}
  
export default ZodiacSignCard;


//-------------Styling-------------//

const ZodiacSignColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.4rem;
  width: 10rem;
  background: #FFFFFF;
  padding: 1rem;
  -webkit-box-shadow: 0 0.625rem 0.375rem -0.375rem rgba(0,0,0,0.37);
  -moz-box-shadow: 0 0.625rem 0.375 -0.375rem rgba(0,0,0,0.37);
  box-shadow: 0 0.625rem 0.375 -0.375rem rgba(0,0,0,0.37);
  border-radius: 0.5rem;
  &:hover {
    cursor: pointer;
    background-color: #fffaf0;
    color: #163952;
  }

  @media ${device.mobileXL} {
      width: 7.8rem;
    } 

    @media ${device.mobileM} {
      width: 7.3rem;
    } 

`;

const ZodiacCircle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.color};
  width: 6rem;
  height: 6rem;
  border-radius: 10rem;
`;

const Img = styled.img`
  width: 4rem;
`;

const Name = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Tenor Sans', sans-serif;
  text-transform: uppercase;
`;

const DateText = styled.div`
  font-family: 'Tenor Sans', sans-serif;
  font-size: 0.9rem;

  @media ${device.mobileXL} {
      font-size: 0.8rem;
    } 
`;
