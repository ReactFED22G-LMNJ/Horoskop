import { Link } from "react-router-dom";
import ZodiacDropdown from '../components/DropDown';
import styled from "styled-components";
import HeaderStartPage from "../components/HeaderStartPage";
import ZodiacSignCard from "../components/ZodiacSignCard";
import { ZodiacSigns } from "../data/ZodiacSignsData";
  
function ChooseYourSign() {
  return (
    <div>
      <HeaderStartPage />
      <ZodiacSignContainer>
        {ZodiacSigns.map((zodiacSign) => (
          <Link key={zodiacSign.name} to={`/dailyhoroscope/${zodiacSign.name.toLowerCase()}`}>
            <ZodiacSignCard
              image={zodiacSign.image}
              name={zodiacSign.name}
              color={zodiacSign.color}
              date={zodiacSign.date}
            />
          </Link>
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
