import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/Button";
import HeaderDailyHoroscope from "../components/HeaderDailyHoroscope";
import Navbar from "../components/Navbar";
import { useAstrologyData } from "../useAstrologyData";

//Tänker att vi ska göra en egen sida/komponent istället för att rendera allt här, man gör det så länge.

/**
 * Displays the daily horoscope for the given zodiac sign.
 * @param sign - The zodiac sign.
 */
function DailyHoroscope() {
  const { sign } = useParams<{ sign: string}>();
  const [day, setDay] = useState('today');
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
      <HeaderDailyHoroscope />
      <Navbar sign={sign} onDaySelect={handleDaySelect} />
      <HoroscopeContainer>
        <HStatsContainer>
          <p>Mood: {astrologyData?.mood}</p>
          <p>Compatible with: {astrologyData?.compatibility}</p>
          <p>Color: {astrologyData?.color}</p>
          <p>Lucky Number: {astrologyData?.lucky_number}</p>
        </HStatsContainer>
        <HDescriptionContainer>
          <SignTitle>{sign?.toUpperCase()}</SignTitle>
          <p>
          <span>{astrologyData?.current_date}</span>
          {astrologyData?.description}</p>
        </HDescriptionContainer>
      </HoroscopeContainer>
      <Button to="/">Back</Button>
    </div>
  );
}

const HoroscopeContainer = styled.div`
display: flex;
justify-content: center;
margin: 3rem;
`;

const HDescriptionContainer = styled.div`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
`;

const HStatsContainer = styled.div`
flex-grow: 1;
padding: 2rem;
  
`;

const SignTitle = styled.h1`
  
`;


export default DailyHoroscope;