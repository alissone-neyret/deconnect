import React, { Component } from 'react';
import {
  Card, CardHeader, CardBody, CardText, Container, Row, Col,
} from 'reactstrap';
import { API_SERVEUR } from '../Constants';
import './ReviewCard.scss';

class ReviewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount = () => {
    const id = this.props;
    fetch(`${API_SERVEUR}/admin/avis/${id.id}`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          reviews: data,
        });
      })
      .catch(err => (`Caught error: ${err}`));
  }

  render() {
    const { reviews } = this.state;
    return (
      <div className="ReviewCard">
        <Container>
          <Row className="row-title-review-card">
            <Col lg="6">
              <h3>Les derniers avis</h3>
            </Col>
          </Row>
          <Row>
            {reviews.map(element => (
              <Col sm="12" lg="6">
                <Card className="card-review">
                  <CardHeader className="header-card">
                    <p className="date">
                      {element.reviewDate}
                    </p>
                    <p>{element.reviewGrade}</p>
                  </CardHeader>
                  <CardBody>
                    <CardText>
                      {element.question7}
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default ReviewCard;
