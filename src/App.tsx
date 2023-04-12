import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {
  ActionButton,
  Button,
  Flex,
  Tooltip,
  TooltipTrigger,
} from '@adobe/react-spectrum';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React Spectrum</h1>
      <div className="card">
        <Button variant="cta" onPress={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
      <Flex gap="size-200">
        <TooltipTrigger>
          <ActionButton>Hover me</ActionButton>
          <Tooltip>I come up after a delay.</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger>
          <ActionButton>Then hover me</ActionButton>
          <Tooltip>If you did it quickly, I appear immediately.</Tooltip>
        </TooltipTrigger>
      </Flex>
    </div>
  );
}

export default App;
