import React from 'react';
import './ButtonClassic.scss';
import { Button } from 'reactstrap';

const ButtonClassic = (props) => {
  const { nextQuestion, type, buttonText } = props;
  return (
    <Button className="ButtonClassic" type={type} onClick={nextQuestion}>
      {buttonText}
    </Button>
  );
};

export default ButtonClassic;
