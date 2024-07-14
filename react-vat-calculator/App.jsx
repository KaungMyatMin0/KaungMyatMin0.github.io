import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0); // State for 'a' (price input)
  const [vat, setVAT] = useState(0); // State for 'vat'

  // Event handler to calculate VAT
  const handler = (e) => {
    const price = e.target.value;
    console.log(price);
    setPrice(price); // Update 'a' state with price input
    let v = price * 0.07; // Calculate VAT (assuming 7%)
    setVAT(Math.round(v * 100) / 100); // Update 'vat' state rounded to two decimal places
  };
  

  return (
  
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      <div className="card">
      <input type="number" placeholder="Enter price" onChange={handler} />
        <p>Price: {price}</p>
        <p>VAT: {vat}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Count: {count}</p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
  
}

export default App
