import React, { useState } from 'react';
import '../Question.css';

const Question1 = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [wrongAnswer, setWrongAnswer] = useState(null);

  const questionNumber = 1; 

  const options = [
    { id: 1, text: 'Red' },
    { id: 2, text: 'White' },
    { id: 3, text: 'Brown' },
    { id: 4, text: 'Green' },
  ];

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
    if (optionId !== 4) {
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
      <h1>What is the color of a leaf?</h1>
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
      {selectedOption && selectedOption === 4 && (
        <>
        <h2 className="correct-message">Congratulations! You selected the correct answer.</h2>
        <button
          className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={onNext}
        >
          Next Question
        </button>
        </>
      )}
      {wrongAnswer && (
        <div>
          <h2 className='ans'>Sorry, the correct answer is Green.</h2>
          <button className="try-again-btn" onClick={handleTryAgain}>
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Question1;
