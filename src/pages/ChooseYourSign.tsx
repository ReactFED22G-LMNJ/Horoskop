import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeaderStartPage from "../components/HeaderStartPage";
import ZodiacSignCard from "../components/ZodiacSignCard";
import { ZodiacSigns } from "../data/ZodiacSignsData";
import { setSelectedZodiacSign } from "./selectedZodiacSign";

interface Props {
  zodiacSigns: Props[];
}

function ChooseYourSign({}: Props) {
  const navigate = useNavigate();

  const handleZodiacSignClick = (name: string) => {
    setSelectedZodiacSign(name);
    navigate(`/dailyhoroscope/${name.toLowerCase()}`);
  };

  return (
    <div>
      <HeaderStartPage />
      <ZodiacSignContainer>
        {ZodiacSigns.map((ZodiacSign) => (
          <ZodiacSignCard
            key={ZodiacSign.name}
            image={ZodiacSign.image}
            name={ZodiacSign.name}
            color={ZodiacSign.color}
            date={ZodiacSign.date}
            onClick={() => handleZodiacSignClick(ZodiacSign.name)}
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
