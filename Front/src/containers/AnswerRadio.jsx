import React from 'react';
import {
  Container, Col, Row, Label, Input,
} from 'reactstrap';
import './AnswerRadio.scss';

const AnswerRadio = (props) => {
  const { answersToArrayAnswers, nb } = props;
  return (
    <Container className="Answer" key={nb}>
      <Row>
        <Col sm="12" lg={{ size: 2, offset: 3 }}>
          <Label check>
            <Input type="radio" name="radio" title="oui" value={5} onClick={answersToArrayAnswers} />
            {' '}
            Oui
          </Label>
        </Col>
        <Col sm="12" lg={{ size: 2 }}>
          <Label check>
            <Input type="radio" name="radio" title="non" value={0} onClick={answersToArrayAnswers} />
            {' '}
            Non
          </Label>
        </Col>
        <Col sm="12" lg={{ size: 3 }}>
          <Label check>
            <Input type="radio" name="radio" title="je ne sais pas" value={0} onClick={answersToArrayAnswers} />
            {' '}
            Je ne sais pas
          </Label>
        </Col>
      </Row>
    </Container>
  );
};

export default AnswerRadio;
