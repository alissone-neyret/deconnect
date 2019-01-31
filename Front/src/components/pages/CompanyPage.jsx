import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CompanyDetails from '../../containers/CompanyDetails';
import './CompanyPage.scss';
import ReviewCard from '../ReviewCard';

const CompanyPage = (props) => {
  const { location } = props;
  const { query } = location;
  return (
    <div className="CompanyPage">
      <Container fluid className="container-search-homepage-company-page">
        <Row>
          <Col
            lg={{ size: 4 }}
            xs={{ size: 10 }}
            className="background-search-bar-company-page mt-5 mt-lg-2"
          >
            <h2 className="h2-title-company-page">
              Hyperconnexion en entreprise :
              <br />
              les avis des salariés
            </h2>
          </Col>
        </Row>
      </Container>
      <section>
        <Container className="mt-lg-5">
          <Row>
            <Col>
              <CompanyDetails id={query} />
            </Col>
          </Row>
          <Row>
            <Col>
              <ReviewCard id={query} />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default CompanyPage;
