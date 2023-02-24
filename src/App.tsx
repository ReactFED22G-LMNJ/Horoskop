import { useState } from 'react';
import './App.css';
import ZodiacSignChart from './pages/ChooseSignPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ZodiacSignChart zodiacSigns={[]}/>
    </div>
  );
}

export default App