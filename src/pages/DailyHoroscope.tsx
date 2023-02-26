import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import HeaderStartPage from "../components/HeaderStartPage";
import { useAstrologyData } from "../useAstrologyData";

function DailyHoroscope() {

  const { astrologyData, fetchAstrologyData } = useAstrologyData();
  const [isLoading, setIsLoading] = useState(true);
  const { sign = "today" } = useParams();

  useEffect(() => {
    async function fetchData() {
      if (sign) {
        await fetchAstrologyData(sign, "today");
        setIsLoading(false);
      }
    }
    fetchData();
  }, [sign, fetchAstrologyData]);

  return (
    <div>
      <HeaderStartPage />
      <HoroscopeContainer>
        <h1>{astrologyData?.date_range}</h1>
        <span>{astrologyData?.day}</span>
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