import './App.css';
import React, { useState } from 'react';

function App() {
  const [usingDarkMode, setUsingDarkMode] = useState(true);
  return (
    <div className={usingDarkMode ? 'App dark-mode' : 'App light-mode'}>
      <h1>Hello World</h1>
      <button onClick={() => setUsingDarkMode(!usingDarkMode)}>
        Toggle Mode
      </button>
    </div>
  );
}

export default App;
