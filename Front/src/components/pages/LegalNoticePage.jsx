import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './LegalNoticePage.scss';

const LegalNoticePage = () => (
  <div className="LegalNoticePage">
    <section>
      <Container className="container-title">
        <Row>
          <Col>
            <h2>Mentions Légales</h2>
          </Col>
        </Row>
      </Container>
      <Container className="container-content">
        <Row>
          <Col>
            <h3> Contenu à venir ...</h3>
          </Col>
        </Row>
      </Container>
    </section>
  </div>
);

export default LegalNoticePage;
