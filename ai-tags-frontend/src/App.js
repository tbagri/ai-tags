import './App.css';
import sample from './sample.js';
import TransactionList from './TransactionList';
import Transaction from './Transaction.js';
import React, { useState } from 'react';

function App() {
  const [usingDarkMode, setUsingDarkMode] = useState(true);
  const sampleTransaction = sample;

  return (
    <div className={usingDarkMode ? 'App dark-mode' : 'App light-mode'}>
      <h1>Hello World</h1>
      <button className='mode-button' onClick={() => setUsingDarkMode(!usingDarkMode)}>
        {
          usingDarkMode ?  
          <svg className='mode-svg' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32"><path fill-rule="evenodd" d="M23.116 22.885h-.001c-7.732 0-14-6.268-14-14v-.001a9.952 9.952 0 0 0-2 6.001c0 5.523 4.477 10 10 10 2.251 0 4.329-.743 6.001-2zm2.422-2.245c.903-.185 1.721.724 1.166 1.46a11.982 11.982 0 0 1-9.59 4.785c-6.627 0-12-5.373-12-12 0-3.92 1.88-7.4 4.786-9.59.736-.554 1.645.264 1.46 1.167-.16.783-.245 1.593-.245 2.423 0 6.627 5.373 12 12 12 .83 0 1.64-.084 2.423-.245z" clip-rule="evenodd"></path></svg>
          :
          <svg className='mode-svg' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32"><path d="M26.704 22.1c.555-.736-.263-1.645-1.166-1.46-.783.16-1.593.245-2.423.245-6.627 0-12-5.373-12-12 0-.83.084-1.64.245-2.423.185-.903-.724-1.721-1.46-1.166a11.982 11.982 0 0 0-4.785 9.59c0 6.627 5.373 12 12 12 3.92 0 7.4-1.88 9.59-4.786z"></path></svg>
        }
      </button>

      <TransactionList></TransactionList>
    </div>
  );
}

export default App;
