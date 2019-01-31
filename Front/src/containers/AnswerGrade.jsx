import React from 'react';
import './AnswerGrade.scss';
import { Form } from 'reactstrap';

const AnswerGrade = (props) => {
  const { answersToArrayAnswers, nb } = props;
  return (
    <div className="AnswerGrade" key={nb}>
      <Form>
        <button value={5} onMouseDown={answersToArrayAnswers} type="button" className="answer-button" title={5}>
          <span href="#5">★</span>
        </button>
        <button value={4} onMouseDown={answersToArrayAnswers} type="button" className="answer-button" title={4}>
          <span href="#4">★</span>
        </button>
        <button value={3} onMouseDown={answersToArrayAnswers} type="button" className="answer-button" title={3}>
          <span href="#3">★</span>
        </button>
        <button value={2} onMouseDown={answersToArrayAnswers} type="button" className="answer-button" title={2}>
          <span href="#2">★</span>
        </button>
        <button value={1} onMouseDown={answersToArrayAnswers} type="button" className="answer-button" title={1}>
          <span href="#1">★</span>
        </button>
      </Form>
    </div>
  );
};

export default AnswerGrade;
