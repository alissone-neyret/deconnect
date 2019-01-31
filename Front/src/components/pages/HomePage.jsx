import React from 'react';
import {
  Container, Row, Col,
} from 'reactstrap';
import Top3 from '../../containers/Top3';
import Top7 from '../../containers/Top7';
import SectionsHomePage from '../SectionsHomePage';
import SimpleSearchBar from '../../containers/SimpleSearchBar';
import './HomePage.scss';


const HomePage = () => (
  <div className="HomePage">
    <Container fluid className="container-search-homepage">
      <Row className="row-container-search-homepage">
        <Col>
          <div className="background-search-bar">
            <h1>
              Droit à la déconnexion pour un
              bon équilibre pro/perso :
              <br />
              qu&apos;en pensent leurs salariés ?
            </h1>
            <SimpleSearchBar />
          </div>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Top3 />
      </Row>
    </Container>
    <Container fluid className="container-top7-homepage">
      <Row>
        <Top7 />
      </Row>
    </Container>
    <Container fluid className="container-sections-homepage">
      <Row className="row-sections-homepage">
        <SectionsHomePage />
      </Row>
    </Container>
  </div>
);

export default HomePage;
