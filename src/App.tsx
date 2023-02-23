import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";

interface AstrologyData {
  date_range: string;
  description: string;
}


function App() {
  const [astrologyData, setAstrologyData] = useState<AstrologyData | null>(null);

  useEffect(() => {
    const options: AxiosRequestConfig = {
      method: 'POST',
      url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
      params: { sign: 'aquarius', day: 'today' },
      headers: {
        'X-RapidAPI-Key': 'b3616ca703msh7f91a1b391d3b37p14580cjsn9dd28c3d9990',
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
      },
    };

    const fetchData = async () => {
      try {
        const response: AxiosResponse<AstrologyData> = await axios.request(options);

        setAstrologyData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!astrologyData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{astrologyData.date_range}</h1>
      <p>{astrologyData.description}</p>
    </div>
  );
}

export default App;

//-------------Styling-------------//

const Title = styled.h1`
font-size: 2rem;
background-color: #ffffff;
`;

