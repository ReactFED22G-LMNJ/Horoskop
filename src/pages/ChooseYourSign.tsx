import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import HeaderChooseYourSign from "../components/HeaderChooseYourSign";
import ZodiacSignCard from "../components/ZodiacSignCard";
import { ZodiacSigns } from "../data/ZodiacSignsData";
import { default as ErrorBoundary } from "../ErrorBoundry";

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
                to={`/dailyhoroscope/${zodiacSign.name.toLowerCase()}/today`}
              >
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


      <ErrorBoundary>
        <Footer/>
      </ErrorBoundary>

    </div>
  );
}

export default ChooseYourSign;


//-------------Styling-------------//

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
  max-width: 1250px;

`;

export const ZodiacLink = styled(Link)`
  color: #000000;
  text-decoration: none;
`;

