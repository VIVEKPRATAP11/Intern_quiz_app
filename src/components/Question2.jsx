import React, { useState } from 'react';
import '../Question.css';

const Question2 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [wrongAnswer, setWrongAnswer] = useState(null);
  
  const questionNumber = 2;

  const options = [
    { id: 1, text: 'BJP' },
    { id: 2, text: 'BSP' },
    { id: 3, text: 'AAP' },
    { id: 4, text: 'SP' },
  ];

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
    if (optionId !== 1) {
      setWrongAnswer(optionId);
    } else {
      setWrongAnswer(null);
    }
  };

  const handleTryAgain = () => {
    setSelectedOption(null);
    setWrongAnswer(null);
  };

  return (
    <div className="question-container">
     <h2 className='question'>Question {questionNumber}</h2>
      <h1>Which one is the largest Political Party in India?</h1>
      <ul>
        {options.map((option) => (
          <li
            key={option.id}
            className={`option ${selectedOption === option.id ? 'selected' : ''} ${
              wrongAnswer === option.id ? 'wrong' : ''
            }`}
            onClick={() => handleOptionSelect(option.id)}
          >
            {option.text}
          </li>
        ))}
      </ul>
      {selectedOption ? (
        selectedOption === 1 ? (
          <h2 className="correct-message">Congratulations! You selected the correct answer.</h2>
        ) : (
          <h2 className='ans'>Sorry, the correct answer is BJP.</h2>
        )
      ) : (
        <p>Please select an option.</p>
      )}
      {selectedOption && wrongAnswer && (
        <button className="try-again-btn" onClick={handleTryAgain}>
          Try Again
        </button>
      )}
    </div>
  );
};

export default Question2;
