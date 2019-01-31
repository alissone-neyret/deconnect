import React, { Component } from 'react';
import {
  Container, Row, Col, Card, CardHeader, CardBody, CardText, Button, Modal, ModalHeader,
  ModalBody, ModalFooter,
} from 'reactstrap';
import ButtonClassic from './ButtonClassic';
import { API_SERVEUR } from '../Constants';
import './CompanyReviews.scss';

class CompanyReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      modal: false,
      nb: 2,
    };
    this.toggle = this.toggle.bind(this);
    this.paginate = this.paginate.bind(this);
  }

  componentDidMount = () => {
    fetch(`${API_SERVEUR}/admin/avis`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          reviews: data,
        });
      })
      .catch(err => (`Caught error: ${err}`));
  }

  deleteReview(id) {
    fetch(`${API_SERVEUR}/avis/${id}`, {
      method: 'delete',
    })
      .then(res => res)
      .then(
        this.setState({
          modal: false,
        }),
      )
      .then(() => {
        fetch(`${API_SERVEUR}/admin/avis`)
          .then(res => res.json())
          .then(data => this.setState({
            reviews: data,
          }));
      });
  }

  toggle() {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  }

  paginate() {
    const { nb } = this.state;
    this.setState({
      nb: nb + 2,
    });
  }

  render() {
    const { reviews, modal, nb } = this.state;
    const review = reviews.slice(0, [nb]);
    return (
      <div className="CompanyReviews">
        <Container>
          {review.map(element => (
            <Row>
              <Col lg="8" md="8" className="col-card-company-reviews">
                <Card className="card-review">
                  <CardHeader className="header-card">
                    <p className="date">
                      {element.reviewDate}
                    </p>
                    <p>{element.companyName}</p>
                    <p>
                      {element.reviewGrade}
                    </p>
                  </CardHeader>
                  <CardBody>
                    <CardText className="card-text-review">
                      <h4 className="title-review">Avis:</h4>
                      {element.question7}
                    </CardText>
                    <CardText>
                      <h4>Proposition d&apos;amélioration :</h4>
                      {element.question8}
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col className="col-delete">
                <Button className="button-delete" color="danger" onClick={this.toggle}>Supprimer</Button>
                <Modal isOpen={modal} toggle={this.toggle}>
                  <ModalHeader toggle={this.toggle}>Suppression</ModalHeader>
                  <ModalBody>
                    Voulez-vous supprimer cet avis ?
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={() => this.deleteReview(element.idReview)}>Confirmer</Button>
                    <Button color="secondary" onClick={this.toggle}>Annuler</Button>
                  </ModalFooter>
                </Modal>
              </Col>
            </Row>
          ))}
          <ButtonClassic
            nextQuestion={this.paginate}
          />
        </Container>
      </div>
    );
  }
}

export default CompanyReviews;
