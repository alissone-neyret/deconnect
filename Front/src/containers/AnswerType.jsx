import React from 'react';
import AnswerGrade from './AnswerGrade';
import AnswerRadio from './AnswerRadio';
import AnswerDate from './AnswerDate';
import AnswerText from './AnswerText';

const AnswerType = (props) => {
  const { nb, question } = props;
  let myRender;
  if (question[nb].type_question === 'truefalse') {
    myRender = <AnswerRadio />;
  } if (question[nb].type_question === 'grade') {
    myRender = <AnswerGrade />;
  } if (question[nb].type_question === 'text') {
    myRender = <AnswerText />;
  } if (question[nb].type_question === 'date') {
    myRender = <AnswerDate />;
  } else {
    myRender = <div />;
  }

  return (
    <div key={nb}>
      {myRender}
    </div>
  );
};

export default AnswerType;
