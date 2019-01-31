import React, { Component } from 'react';
import {
  Container, Col, Row, Input, Button, FormGroup, Label, Form,
} from 'reactstrap';
import { API_SERVEUR } from '../Constants';

class AddCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handlesubmit() {
    const {
      logo, description, email, companyName,
      address, phoneNumber, website, referent,
    } = this.state;
    const { history } = this.props;
    const data = {
      logo,
      description,
      email,
      address,
      phoneNumber,
      website,
      referent,
      companyName,
    };
    fetch(`${API_SERVEUR}/api/company`,
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': { API_SERVEUR },
        }),
        body: JSON.stringify(data),
      })
      .then(alert(`Entreprise ${companyName} ajoutée`))
      .then(() => history.push('/page-admin'));
  }


  render() {
    const { toggle } = this.props;
    return (
      <div className="AddCompany">
        <Container className="container add-company">
          <Form onSubmit={this.handlesubmit}>
            <Row>
              <Col lg={6} xs={12} className="company-name">
                <img className="image-company" alt="logo company" />
                <div className="contact-details">
                  <FormGroup row>
                    <Col sm={10}>
                      <Label className="tabulation-company-details-mail">Nom de l&apos;entreprise :</Label>
                      <Input
                        type="text"
                        name="companyName"
                        onChange={this.onChange}
                      />
                    </Col>
                    <Col sm={10}>
                      <Label className="tabulation-company-details-mail">Email :</Label>
                      <Input
                        type="email"
                        name="email"
                        onChange={this.onChange}
                      />
                    </Col>
                    <Col sm={10}>
                      <Label className="tabulation-company-details-website">Site internet :</Label>
                      <Input
                        type="text"
                        name="website"
                        onChange={this.onChange}
                      />
                    </Col>
                    <Col sm={10}>
                      <Label className="tabulation-company-details-tel">Téléphone :</Label>
                      <Input
                        type="text"
                        name="phoneNumber"
                        onChange={this.onChange}
                      />
                    </Col>
                    <Col sm={10}>
                      <Label className="tabulation-company-details-referent">Référent droit à la déconnexion :</Label>
                      <Input
                        type="text"
                        name="referent"
                        onChange={this.onChange}
                      />
                    </Col>
                    <Col sm={10}>
                      <Label className="tabulation-company-details-adress">Adresse du siège :</Label>
                      <Input
                        type="text"
                        name="address"
                        onChange={this.onChange}
                      />
                    </Col>
                  </FormGroup>
                </div>
              </Col>
              <Col lg={6} xs={12} className="company-describe">
                <FormGroup row>
                  <Col>
                    <Label className="describe-company-text">Description de l&apos;entreprise :</Label>
                    <Input
                      rows="10"
                      type="textarea"
                      name="description"
                      onChange={this.onChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col>
                    <Label className="describe-company-text">Ajouter un logo :</Label>
                    <Input
                      className="file-input"
                      type="file"
                      name="logo"
                      onChange={e => this.handleImageChange(e)}

                    />
                  </Col>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Button type="submit" onClick={() => this.handlesubmit} color="primary">Enregistrer</Button>
              </Col>
              <Col sm={6}>
                <Button color="danger" onClick={toggle}>Annuler</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    );
  }
}

export default AddCompany;
