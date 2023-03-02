import { Link } from "react-router-dom";
import styled from "styled-components";
import FooterChooseYourSign from "../components/FooterChooseYourSign";
import HeaderChooseYourSign from "../components/HeaderChooseYourSign";
import ZodiacSignCard from "../components/ZodiacSignCard";
import { ZodiacSigns } from "../data/ZodiacSignsData";
import ErrorBoundary from "../ErrorBoundry";

function ChooseYourSign() {
  return (
    <div>
      <ErrorBoundary>
        <HeaderChooseYourSign />
      </ErrorBoundary>
      <ErrorBoundary>
        <ZodiacZignWrapper>
        <ZodiacSignContainer>
          {ZodiacSigns.map((zodiacSign) => (
            <ZodiacLink
              key={zodiacSign.name}
              to={`/dailyhoroscope/${zodiacSign.name.toLowerCase()}/today`}>
              <ZodiacSignCard
                image={zodiacSign.image}
                name={zodiacSign.name}
                color={zodiacSign.color}
                date={zodiacSign.date}
              />
            </ZodiacLink>
          ))}
        </ZodiacSignContainer>
        </ZodiacZignWrapper>
      </ErrorBoundary>
      <FooterChooseYourSign/>
    </div>
  );
}

 const ZodiacZignWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
 `;

const ZodiacSignContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 1rem;
  padding-right: 1rem;

`;

export const ZodiacLink = styled(Link)`
  color: #000000;
  text-decoration: none;
`;

export default ChooseYourSign;
