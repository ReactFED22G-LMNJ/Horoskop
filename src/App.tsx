import styled from 'styled-components';
import './App.css';
import Button from './lib/Button';

const Title = styled.h1`
font-size: 2rem;
background-color: #ffffff;
`;

function handleClick() {
  console.log('Button clicked!');
}

function App() {

  return (

    <div>
      <Title>
      Hello world
      </Title>
      <Button onClick={handleClick}>Click me</Button>

    </div>

  )
}

export default App
