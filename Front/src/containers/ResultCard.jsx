import React from 'react';
import {
  Row, Col, Button, Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './ResultCard.scss';

const ResultCard = (props) => {
  const { comp } = props;
  return (
    <Container key={comp.idCompany} className="ResultCard">
      <Row className="row-title-company">
        <Col lg="6" sm="12" className="company-describe">
          <h2>
            {comp.companyName}
          </h2>
        </Col>
      </Row>
      <Row className="header-jumbotron-company">
        <Col lg="6" sm={{ size: 12 }}>
          {comp.logo != null
            ? (<img className="logo-company" src={comp.logo} alt="Logo de l'entreprise" />
            ) : (<img className="logo-company" src="/medias/placeholder-logo-company.png" alt="Logo Vide" />
            )}

        </Col>
        <Col className="col-description" lg="6" sm={{ size: 12 }}>
          <p className="description-label">
            Description de l&apos;entreprise :
          </p>
          <p className="description-text">
            {comp.description}
          </p>
        </Col>
      </Row>
      <Link to={{ pathname: '/fiche-entreprise', query: comp.idCompany }}>
        <Button color="primary">
          En savoir plus
        </Button>
      </Link>
    </Container>
  );
};


export default ResultCard;
