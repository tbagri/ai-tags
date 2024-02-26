import './App.css';
import sample from './sample.js';
import TransactionList from './TransactionList';
import Transaction from './Transaction.js';
import React, { useState } from 'react';
import PopUp from './PopUp.js';

function App() {
  const [usingDarkMode, setUsingDarkMode] = useState(false);
  const sampleTransaction = sample;
  return (
    <div className={usingDarkMode ? 'App dark-mode' : 'App light-mode'}>
      <TransactionList></TransactionList>
    </div>
  );
}

export default App;
