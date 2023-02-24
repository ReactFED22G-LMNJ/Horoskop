import styled from 'styled-components';
import HeaderChooseYourSign from '../components/HeaderChooseYourSign';
import ZodiacSignCard from '../components/ZodiacSignCard';
import { ZodiacSigns } from '../data/ZodiacSignsData';

interface Props {
    zodiacSigns: Props[];
  }
  
  function ChooseYourSign({ }: Props) {
    return (
      <div>
        <HeaderChooseYourSign />
        <ZodiacSignContainer>
          {ZodiacSigns.map(ZodiacSign => (
            <ZodiacSignCard
              key={ZodiacSign.name}
              image={ZodiacSign.image}
              name={ZodiacSign.name}
              color={ZodiacSign.color}
              date={ZodiacSign.date}      
            />
          ))}
        </ZodiacSignContainer>
      </div>
      );
  }

const ZodiacSignContainer = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1280px;
`;
 

export default ChooseYourSign;