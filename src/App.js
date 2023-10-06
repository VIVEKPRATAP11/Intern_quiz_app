import React, { useState } from 'react';
import './App.css';
import Question1 from './components/Question1';
import Question2 from './components/Question2';

function App() {
  const [showQuestion2, setShowQuestion2] = useState(false);

  return (
    <div className="App">
      {!showQuestion2 ? (
        <Question1 onNext={() => setShowQuestion2(true)} />
      ) : (
        <Question2 />
      )}
    </div>
  );
}

export default App;
