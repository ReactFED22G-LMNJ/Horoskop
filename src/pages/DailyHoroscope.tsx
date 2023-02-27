import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import HeaderStartPage from "../components/HeaderStartPage";
import { useAstrologyData } from "../useAstrologyData";

//Tänker att vi ska göra en egen sida/komponent istället för att rendera allt här, man gör det så länge.

function DailyHoroscope() {
  const { sign, day = 'today' } = useParams<{ sign: string, day: string }>();
  const { astrologyData, fetchAstrologyData } = useAstrologyData();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (sign) {
        await fetchAstrologyData(sign, day);
        setIsLoading(false);
      }
    }
    fetchData();
    console.log(sign);
    console.log(day);
  }, [sign]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <HeaderStartPage />
      <HoroscopeContainer>
        <h1>{sign?.toUpperCase()}</h1>
        <span>{astrologyData?.current_date}</span>
        <p>{astrologyData?.description}</p>
        <p>{astrologyData?.mood}</p>
      </HoroscopeContainer>
    </div>
  );
}

const HoroscopeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
`;

export default DailyHoroscope;