import React from 'react';

interface QuestionProps {
  questions: string[];
  onClick: () => void;
}

const Question = ({ questions, onClick }: QuestionProps) => {
  return (
    <div className='question-container'>
      <h2>
        {questions.map((question, i) => {
          return i === 0 ? question : undefined;
        })}
      </h2>
      <button type='button' className='submit-btn' onClick={onClick}>
        Submit
      </button>
    </div>
  );
};

export default Question;
