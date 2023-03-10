import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/Button";
import Footer from "../components/Footer";
import HeaderDailyHoroscope from "../components/HeaderDailyHoroscope";
import HoroscopeStatCards from "../components/HoroscopeStatsCard";
import Navbar from "../components/Navbar";
import { device } from "../data/Breakpoints";
import { ZodiacSigns } from "../data/ZodiacSignsData";
import ErrorBoundary from "../ErrorBoundry";
import { useAstrologyData } from "../hooks/useAstrologyData";

/**
 * Displays the daily horoscope for the given zodiac sign.
 * @param sign - The zodiac sign.
 */
function DailyHoroscope() {
  const { sign } = useParams<{ sign: string }>();
  const [day, setDay] = useState("today");
  const { astrologyData, fetchAstrologyData } = useAstrologyData();
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Fetches astrology data when component mounts or `sign` or `day` change.
   */
  useEffect(() => {
    async function fetchData() {
      if (sign) {
        await fetchAstrologyData(sign, day);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [sign, day]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  /**
   * Handles the selection of a new day, and updates the component state accordingly.
   *
   * @param newDay The new day to select.
   */
  function handleDaySelect(newDay: string) {
    setDay(newDay);
  }

  return (
    <div>
      {/* //-------------Header-------------// */}
      <ErrorBoundary>
        <HeaderDailyHoroscope />
      </ErrorBoundary>

      {/* //-------------Navbar-------------// */}
      <ErrorBoundary>
        <Navbar sign={sign} onDaySelect={handleDaySelect} />
      </ErrorBoundary>

      <ErrorBoundary>
        <HoroscopeContainer>
          {/* //-------------Horoscope card-------------// */}
          <HStatsContainer>
            {ZodiacSigns.map((zodiacSign) =>
              zodiacSign.name === sign ? (
                <HoroscopeStatCards
                  key={zodiacSign.image}
                  image={`${window.location.origin}${zodiacSign.image}`}
                  name={zodiacSign.name}
                  color={zodiacSign.color}
                >
                  <SignName>{sign?.toUpperCase()}</SignName>
                  <p>Mood: {astrologyData?.mood}</p>
                  <p>Lucky Number: {astrologyData?.lucky_number}</p>
                  <p>Compatible with: {astrologyData?.compatibility}</p>
                </HoroscopeStatCards>
              ) : null
            )}
          </HStatsContainer>

          {/* //-------------Daily reading-------------// */}
          <HDescriptionContainer>
            <AstrologyDataContainer>
              <AstologyDate>{astrologyData?.current_date} - </AstologyDate>
              {astrologyData?.description}
            </AstrologyDataContainer>
          </HDescriptionContainer>
        </HoroscopeContainer>
      </ErrorBoundary>

      {/* //-------------Footer-------------// */}
      <ErrorBoundary>
        <Footer>
          <Button to="/chooseyoursign">All Zodiac Signs</Button>
        </Footer>
      </ErrorBoundary>
    </div>
  );
}

export default DailyHoroscope;

//-------------Styling-------------//

const HoroscopeContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const HDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding-top: 2rem;

  @media ${device.tablet} {
    width: 70%;
    padding-top: 0;
    padding-bottom: 2rem;
  }

  @media ${device.mobileM} {
    width: 80%;
  }
`;

const HStatsContainer = styled.div`
  padding: 2rem;
`;

const SignName = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
`;

const AstrologyDataContainer = styled.div`
  font-family: "Libre Baskerville", serif;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2.2rem;
  width: 100%;
`;

const AstologyDate = styled.span`
  font-family: "Libre Baskerville", serif;
  line-height: 2.2rem;
  font-weight: 700;
`;
