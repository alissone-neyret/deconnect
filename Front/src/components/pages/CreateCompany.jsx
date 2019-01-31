import React, { Component } from 'react';
import {
  Container, Col, Row, Button,
} from 'reactstrap';
import { API_SERVEUR } from '../../Constants';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './LeaveReviewPage.scss';
import './CreateCompany.scss';

class CreateCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
    };
    this.companyToCreate = this.companyToCreate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  companyToCreate(e) {
    this.setState({
      companyName: e.target.value,
    });
  }

  handleSubmit() {
    const { companyName } = this.state;
    const { history } = this.props;
    const data = { companyName };
    fetch(`${API_SERVEUR}/api/company`,
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(history.push('/laisser-un-avis'));
  }

  render() {
    const { companyName } = this.state;
    return (
      <div className="LeaveReviewPage">
        <Container fluid className="container-search-homepage">
          <Row>
            <Col lg={{ size: 7 }} xs={{ size: 10 }} className="background-search-bar mt-5 mt-lg-2">
              <h2>Créer une entreprise</h2>
            </Col>
          </Row>
        </Container>
        <section>
          <Container>
            <div className="CreateCompany">
              <Row>
                <input value={companyName} onChange={this.companyToCreate} className="input-create-company" />
              </Row>
              <Row>
                <Button onClick={() => { if (window.confirm(`Etes-vous sur de vouloir ajouter ${companyName}?`)) this.handleSubmit(); }} className="button-create-company"> Valider l&apos;entreprise à ajouter</Button>
              </Row>
            </div>
          </Container>
        </section>
      </div>
    );
  }
}

export default CreateCompany;
