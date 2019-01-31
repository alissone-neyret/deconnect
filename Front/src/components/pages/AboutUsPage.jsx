import React, { Component } from 'react';
import {
  Container, Row, Col,
} from 'reactstrap';
import './AboutUsPage.scss';
import { API_SERVEUR } from '../../Constants';

class AboutUsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  componentDidMount = () => {
    fetch(`${API_SERVEUR}/edittext/aboutus`)
      .then(response => response.json())
      .then((data) => {
        // setstate to set up the labels
        this.setState({
          text: data[0].text,
        });
      })
      .catch(err => (`Caught error: ${err}`));
  }

  render() {
    const { text } = this.state;
    return (
      <div className="AboutUsPage">
        <section>
          <Container className="container-title">
            <Row>
              <Col>
                <h2>A Propos</h2>
              </Col>
            </Row>
          </Container>
          <Container className="container-content">
            <div contentEditable="true" dangerouslySetInnerHTML={{ __html: text }} />
          </Container>
        </section>
      </div>
    );
  }
}

export default AboutUsPage;
