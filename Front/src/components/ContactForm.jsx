import React from 'react';
import {
  Container, Form, FormGroup, Label, Input, Col, Row,
} from 'reactstrap';
import ButtonClassic from './ButtonClassic';
import './ContactForm.scss';
import { API_SERVEUR } from '../Constants';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      text: '',
      company: '',
      address: '',
      address2: '',
      zip: '',
      city: '',
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitForm() {
    const data = this.state;
    fetch(`${API_SERVEUR}/api/email`,
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(
        alert('Votre message a bien été envoyé.'),
        this.setState(prevState => prevState),
      );
  }

  render() {
    const {
      email, text, company, address, address2, zip, city,
    } = this.state;
    return (
      <Container className="ContactForm">
        <Form onSubmit={() => this.submitForm()}>
          <Row>
            <Col sm={{ size: 6, offset: 3 }}>
              <FormGroup>
                <Label for="company">Entreprise</Label>
                <Input onChange={this.handleChange} type="text" name="company" id="company" placeholder="Nom de l'entreprise" value={company} />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email *</Label>
                <Input onChange={this.handleChange} type="email" name="email" id="email" placeholder="exemple@email.com" value={email} />
              </FormGroup>
              <FormGroup>
                <Label for="address">Adresse du siège social</Label>
                <Input onChange={this.handleChange} type="text" name="address" id="address" value={address} />
              </FormGroup>
              <FormGroup>
                <Label for="address2">Complément d&apos;adresse</Label>
                <Input onChange={this.handleChange} type="text" name="address2" id="address2" value={address2} />
              </FormGroup>
              <FormGroup>
                <Label for="city">Ville</Label>
                <Input onChange={this.handleChange} type="text" name="city" id="city" value={city} />
              </FormGroup>
              <FormGroup>

                <Label for="zip">Code Postal</Label>
                <Input onChange={this.handleChange} type="text" name="zip" id="zip" value={zip} />
              </FormGroup>
              <FormGroup>
                <Label for="text">Votre message *</Label>
                <Input onChange={this.handleChange} type="textarea" name="text" id="text" value={text} />
              </FormGroup>
              <p>* champ obligatoire</p>
              <ButtonClassic type="submit" buttonText="Envoyer" />
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default ContactForm;
