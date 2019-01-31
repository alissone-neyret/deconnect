import React from 'react';
import './QuestionForm.scss';
import {
  Container, Row, Col,
} from 'reactstrap';
import Question from './Question';


const QuestionForm = (props) => {
  const {
    nb, questions, nbQuestions,
  } = props;
  return (
    <div className="QuestionForm">
      <Container>
        <Row>
          <Col>
            <Question nb={nb} nbQuestions={nbQuestions} questions={questions} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default QuestionForm;
