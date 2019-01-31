import React from 'react';
import './AnswerDate.scss';
import { Container, Form, Input } from 'reactstrap';

const AnswerDate = (props) => {
  const { getComment, nb } = props;
  return (
    <Container className="AnswerDate" key={nb}>
      <Form>
        <Input type="date" name="date" id="Date" onChange={getComment} />
      </Form>
    </Container>
  );
};

export default AnswerDate;
