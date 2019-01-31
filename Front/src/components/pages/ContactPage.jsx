import React from 'react';
import {
  Container, Row, Col,
} from 'reactstrap';

import './ContactPage.scss';
import ContactForm from '../ContactForm';

const ContactPage = () => (
  <div className="ContactPage">
    <section>
      <Container className="container-title">
        <Row>
          <Col className="background-title">
            <h2>Contactez-nous</h2>
          </Col>
        </Row>
      </Container>
      <ContactForm />
    </section>
  </div>
);

export default ContactPage;
