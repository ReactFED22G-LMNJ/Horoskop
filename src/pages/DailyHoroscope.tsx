import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { device } from "../components/Breakpoints";
import FooterDailyHoroscope from "../components/FooterDailyHoroscope";
import HeaderDailyHoroscope from "../components/HeaderDailyHoroscope";
import HoroscopeStatCards from "../components/HoroscopeStatsCard";
import Navbar from "../components/Navbar";
import { ZodiacSigns } from "../data/ZodiacSignsData";
import ErrorBoundary from "../ErrorBoundry";
import { useAstrologyData } from "../hooks/useAstrologyData";

//Tänker att vi ska göra en egen sida/komponent istället för att rendera allt här, man gör det så länge.

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
    console.log(sign);
    //console.log(ZodiacSigns[0].image)
    console.log(ZodiacSigns[0].name);
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
      <ErrorBoundary>
        <HeaderDailyHoroscope />
      </ErrorBoundary>
      <ErrorBoundary>
        <Navbar sign={sign} onDaySelect={handleDaySelect} />
      </ErrorBoundary>
      <ErrorBoundary>
        <HoroscopeContainer>
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
          <HDescriptionContainer>
            <AstrologyDataContainer>
              <AstologyDate>{astrologyData?.current_date} - </AstologyDate>
              {astrologyData?.description}
            </AstrologyDataContainer>
          </HDescriptionContainer>
        </HoroscopeContainer>
      </ErrorBoundary>

      <FooterDailyHoroscope/>
    </div>
  );
}

export default DailyHoroscope;

const HoroscopeContainer = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  background-color: #FFFFFF;
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
  font-family: 'Libre Baskerville', serif;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2.2rem;
  width: 100%;
`;

const AstologyDate = styled.span`
  font-family: 'Libre Baskerville', serif;
  line-height: 2.2rem;
  font-weight: 700;
`;

