import styled from 'styled-components';
import Header from '../components/Header';
import ZodiacSignCard from '../components/ZodiacSignCard';
import { ZodiacSigns } from '../data/ZodiacSignsData';

interface Props {
    zodiacSigns: Props[];
  }
  
  function ZodiacSignChart({ }: Props) {
    return (
      <div>
        <Header />
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
  
export default ZodiacSignChart


const ZodiacSignContainer = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;