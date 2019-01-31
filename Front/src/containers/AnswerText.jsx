import React from 'react';
import { Container, Form, Input } from 'reactstrap';

const AnswerText = (props) => {
  const { getComment, nb } = props;
  return (
    <Container className="AnswerText" key={nb}>
      <Form>
        <Input maxLength="500" rows="5" type="textarea" name="text" id="text" onChange={getComment} />
      </Form>
    </Container>
  );
};

export default AnswerText;
