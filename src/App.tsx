import styled from "styled-components";
import "./App.css";

interface AstrologyData {
  date_range: string;
  description: string;
  mood: string;
  current_date: string;
}

//TODO:
//Skapa en hook med astro-data.
//Fixa en enklare horoskoptextsida.
//Lägg till routing mellan tecken-knappar och textsida.
//Koppla in rätt api beroende på knapptryck.

function App() {
 
}

export default App;

//-------------Styling-------------//

const Title = styled.h1`
font-size: 2rem;
background-color: #ffffff;
`;

