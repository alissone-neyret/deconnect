import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './CompanyAccountPage.scss';

const CompanyAccountPage = () => (
  <div className="CompanyAccountPage">
    <section>
      <Container className="container-title">
        <Row>
          <Col className="background-title">
            <h2>Compte Entreprise</h2>
          </Col>
        </Row>
      </Container>
      <Container className="container-content">
        <Row>
          <Col>
            <h3>Accedez à votre fiche entreprise en demandant un compte entreprise</h3>
            <h3>Plus d&apos;informations prochainement ...</h3>
          </Col>
        </Row>
      </Container>
    </section>
  </div>
);

export default CompanyAccountPage;
