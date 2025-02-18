import React from 'react';

interface QuestionProps {
  question: string[];
}

const Question = ({ question }: QuestionProps) => {
  return (
    <div className='question-container'>
      <h2>{question}</h2>
    </div>
  );
};

export default Question;
