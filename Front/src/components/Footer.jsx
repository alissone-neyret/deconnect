import React from 'react';
import {
  Col, Container, Row,
} from 'reactstrap';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="Footer">
    <Container fluid className="text-center text-md-left mt-5 pt-4 pb-3">
      <Row>
        <Col md="4">
          <ul className="list">
            <li>
              <Link to="/a-propos">A propos</Link>
            </li>
            <li>
              <Link to="/compte-entreprise">Compte Entreprise</Link>
            </li>
          </ul>
        </Col>
        <Col md="4" className="text-center hiddenImg">
          <a href="https://wildcodeschool.fr" target="_blank" rel="noopener noreferrer">
            <img src="/medias/logoWild.png" className="wcs-logo" alt="WildCodeSchool logo" />
          </a>
        </Col>
        <Col md="4">
          <ul className="list">
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/mentions-legales">Mentions légales</Link>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="credits-footer">
          <p>MADE WITH ❤ BY WILD CODE SCHOOL</p>
          <p>Le Droit à la Déconnexion © 2018</p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
