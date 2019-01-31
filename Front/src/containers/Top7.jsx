import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardTitle,
  Container, Row, Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Top7.scss';

const Top7 = () => (
  <Container className="Top7 mt-lg-5 mb-lg-4">
    <Row className="row-top7">
      <Col xs="6" lg="2">
        <Link to="/fiche-entreprise">
          <Card className="cards-top7">
            <CardImg top src="medias/cultura.png" alt="Cultura logo" />
            <CardBody className="pl-0 pr-0">
              <CardTitle>Cultura</CardTitle>
              <CardText>
                Note globale : 3.6/5
              </CardText>
            </CardBody>
          </Card>
        </Link>
      </Col>

      <Col xs="6" lg="2">
        <Link to="/fiche-entreprise">
          <Card className="cards-top7">
            <CardImg top src="medias/honda.jpeg" alt="Honda Logo" />
            <CardBody className="pl-0 pr-0">
              <CardTitle>Honda</CardTitle>
              <CardText>
                Note globale : 3.4/5
              </CardText>
            </CardBody>
          </Card>
        </Link>
      </Col>

      <Col xs="6" lg="2">
        <Link to="/fiche-entreprise">
          <Card className="cards-top7">
            <CardImg top src="medias/lush.jpeg" alt="Lush logo" />
            <CardBody className="pl-0 pr-0">
              <CardTitle>Lush</CardTitle>
              <CardText>
                Note globale : 3.3/5
              </CardText>
            </CardBody>
          </Card>
        </Link>
      </Col>

      <Col xs="6" lg="2">
        <Link to="/fiche-entreprise">
          <Card className="cards-top7">
            <CardImg top src="medias/nivea.png" alt="Nivea logo" />
            <CardBody className="pl-0 pr-0">
              <CardTitle>Nivea</CardTitle>
              <CardText>
              Note globale : 3.2/5
              </CardText>
            </CardBody>
          </Card>
        </Link>
      </Col>
    </Row>
    <Row className="row-top7">
      <Col xs="6" lg="2">
        <Link to="/fiche-entreprise">
          <Card className="cards-top7">
            <CardImg top src="medias/toys.png" alt="ToysRus logo" />
            <CardBody className="pl-0 pr-0">
              <CardTitle>ToysRus</CardTitle>
              <CardText>
              Note globale : 3.2/5
              </CardText>
            </CardBody>
          </Card>
        </Link>
      </Col>

      <Col xs="6" lg="2">
        <Link to="/fiche-entreprise">
          <Card className="cards-top7">
            <CardImg top src="medias/decathlon.png" alt="Decathlon logo" />
            <CardBody className="pl-0 pr-0">
              <CardTitle>Decathlon</CardTitle>
              <CardText>
              Note globale : 3.0/5
              </CardText>
            </CardBody>
          </Card>
        </Link>
      </Col>

      <Col xs="6" lg="2">
        <Link to="/fiche-entreprise">
          <Card className="cards-top7">
            <CardImg top src="medias/leroymerlin.png" alt="Leroy Merlin logo" />
            <CardBody className="pl-0 pr-0">
              <CardTitle className="cards-title-top7">Leroy Merlin</CardTitle>
              <CardText>
              Note globale : 2.9/5
              </CardText>
            </CardBody>
          </Card>
        </Link>
      </Col>
    </Row>
  </Container>
);
export default Top7;
