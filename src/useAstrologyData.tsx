import { useState } from "react";

/**
 * Represents the astrology data to be fetched.
 * @interface AstrologyData
 */
interface AstrologyData {
    sign?: string;
    day?: string;
    date_range?: string;
    description?: string;
    mood?: string;
    current_date?: string;
    color?: string;
    lucky_number?: string;
    lucky_time?: string;
    compatibility?: string;
  }

/**
 * Custom hook for fetching astrology data from API.
 * @returns An object with `astrologyData` and `fetchAstrologyData` function.
 */
export function useAstrologyData() {
    const [astrologyData, setAstrologyData] = useState<AstrologyData | null>(null);
  
    /**
   * Fetches astrology data from API.
   * @param sign - The zodiac sign.
   * @param day - The horoscope day, e.g. "today".
   */
    const fetchAstrologyData = async (sign: string, day: string) => {
      const apiUrl = `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=${day}`;
      const options = {
        method: 'POST',
        headers: {
          'X-RapidAPI-Key': 'b3616ca703msh7f91a1b391d3b37p14580cjsn9dd28c3d9990',
          'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
        },
      };
  
      try {
        const response = await fetch(apiUrl, options);
        const data: AstrologyData = await response.json();
        setAstrologyData(data);
        //console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    return { astrologyData, fetchAstrologyData };
  }