import styled from 'styled-components';
import ZodiacSignCard from '../components/ZodiacSignCard';
import { ZodiacSigns } from '../data/ZodiacSignsData';

interface Props {
    zodiacSigns: Props[];
  }
  
  function ZodiacSignChart({ }: Props) {
    return (
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
      );
  }
  
export default ZodiacSignChart


const ZodiacSignContainer = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;