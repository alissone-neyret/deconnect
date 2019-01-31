import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardTitle, Button, Container, Row, Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Top3.scss';

const Top3 = () => (
  <Container className="Top3 mt-lg-5">
    <Row className="row-titre-top3">
      <Col>
        <h2>Découvrez les 10 entreprises les mieux notées</h2>
      </Col>
    </Row>
    <Row className="row-top3-first">
      <Col className="colTop3" lg="3" md="12">
        <img className="image-first-top3" src="../medias/top1.jpeg" alt="symbole first place" />
        <Card className="cards-top3">
          <CardImg top width="50%" src="../medias/n&d.png" alt="logo first entreprise" />
          <CardBody className="pl-0 pr-0">
            <CardTitle>Nature & Découverte</CardTitle>
            <CardText>
              Note globale : 4.5/5
            </CardText>
            <Link to="/fiche-entreprise"><Button>En savoir plus</Button></Link>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row className="row-top3">
      <Col className="col-top3-other mt-4" lg="3" md="12">
        <img className="image-first-top3" src="../medias/top2.jpeg" alt="symbole second place" />
        <Card className="cards-top3-two">
          <CardImg top width="50%" src="../medias/edf.png" alt="logo second entreprise" />
          <CardBody className="pl-0 pr-0">
            <CardTitle>EDF</CardTitle>
            <CardText>
              Note globale : 4/5
            </CardText>
            <Link to="/fiche-entreprise"><Button>En savoir plus</Button></Link>
          </CardBody>
        </Card>
      </Col>

      <Col className="col-top3-other  mt-4" lg={{ size: 3, offset: 4 }} md="12">
        <img className="image-first-top3" src="../medias/top3.jpeg" alt="symbole third place" />
        <Card className="cards-top3-two">
          <CardImg top width="50%" src="../medias/sodebo.png" alt="logo third entreprise" />
          <CardBody className="pl-0 pr-0">
            <CardTitle>Sodebo</CardTitle>
            <CardText>
              Note globale: 3.7/5
            </CardText>
            <Link to="/fiche-entreprise"><Button>En savoir plus</Button></Link>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);
export default Top3;
