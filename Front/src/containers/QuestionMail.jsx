import React from 'react';
import {
  Form, FormGroup, Label, Input, Col, Row, Container,
} from 'reactstrap';
import './QuestionMail.scss';

const QuestionMail = (props) => {
  const { collectUserInfo, jobPosition } = props;
  return (
    <Container className="QuestionMail">
      <h3> Nous souhaiterions quelques informations complémentaires</h3>
      <Form>
        <FormGroup>
          <p>
            Il s&apos;agit d&apos;un processus de vérification. Votre adresse email
            <br />
            restera privée et sera invisible sur le site.
          </p>
          <Label for="userEmail">Votre Email</Label>
          <Input type="email" name="userEmail" className="user-mail" placeholder="exemple@domaine.fr" onChange={collectUserInfo} />
          <br />
          <Label> Ville de l&apos;entreprise</Label>
          <Input type="text" name="companyCity" placeholder="ex: Paris" onChange={collectUserInfo} className="city-user" />
          <br />
          <Row>
            <Col sm="12" md="6">
              <Label> Niveau du poste</Label>
              <Input
                type="select"
                name="jobPosition"
                onChange={collectUserInfo}
                value={jobPosition}
                className="poste-user"
              >
                <option defaultValue>Salarié non-cadre</option>
                <option>Cadre</option>
                <option>Responsable</option>
                <option>Directeur</option>
              </Input>
            </Col>
            <br />
            <Col sm="12" md="6" className="mt-4 mt-lg-0">
              <Label> Votre contrat est-il terminé ?</Label>
              <Input
                type="select"
                name="employmentStatus"
                className="contract-user"
                onChange={collectUserInfo}
              >
                <option defaultValue>En Poste</option>
                <option>En 2019</option>
                <option>En 2018</option>
                <option>En 2017</option>
                <option>En 2016</option>
                <option>Antérieur à 2016</option>
              </Input>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default QuestionMail;
