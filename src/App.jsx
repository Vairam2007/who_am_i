import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <header className="header">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>

      <main>
        <h1 className="title">Who Am I</h1>
        <p className="subtitle">A React + Vite project by</p>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            You clicked {count} times
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR.
          </p>
        </div>
      </main>

      <footer className="footer">
        <p>Created with innovation by
           <strong>Karthick</strong>,
            <strong>Vikraanth</strong>, 
             <strong>Santhosh</strong>,
            <strong>Logashree</strong> and
            <strong>Safana</strong>
             </p>
      </footer>
    </div>
  );
}

export default App;
