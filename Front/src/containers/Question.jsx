import React from 'react';
import './Question.scss';

const Question = (props) => {
  const { questions, nbQuestions, nb } = props;
  const { textQuestion } = questions[nb];
  return (
    <div className="Question">
      <h3>
        Question
        {` ${nb + 1} `}
        /
        {` ${nbQuestions}`}
      </h3>
      <p>{textQuestion}</p>
    </div>
  );
};

export default Question;
