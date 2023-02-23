import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { Button } from './components/Button';

interface AstrologyData {
  date_range: string;
  description: string;
}

function App() {
  const [astrologyData, setAstrologyData] = useState<AstrologyData | null>(null);

  const fetchAstrologyData = async (sign: string, day: string) => {
    const options: AxiosRequestConfig = {
      method: 'POST',
      url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
      params: { sign, day },
      headers: {
        'X-RapidAPI-Key': 'b3616ca703msh7f91a1b391d3b37p14580cjsn9dd28c3d9990',
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
      },
    };

    try {
      const response: AxiosResponse<AstrologyData> = await axios.request(options);
      setAstrologyData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!astrologyData) {
    return (
      <div>
        <Button onClick={() => fetchAstrologyData('aquarius', 'today')}>Aquarius</Button>
        <Button onClick={() => fetchAstrologyData('cancer', 'tomorrow')}>Cancer</Button>
      </div>
    );
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

