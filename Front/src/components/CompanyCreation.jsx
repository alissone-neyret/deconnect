import React from 'react';
import {
  Button, Form, FormGroup, Input, Col, Row,
} from 'reactstrap';
import './CompanyCreation.scss';

const CompanyCreation = () => (
  <div className="CompanyCreation">
    <Form>
      <Row className="mt-lg-5">
        <Col>
          <h5>Coordonnées</h5>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }}>
          <FormGroup>
            <Input type="text" name="activité" id="activité" placeholder="Activité" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }}>
          <FormGroup>
            <Input type="text" name="entreprise" id="entreprise" placeholder="Raison sociale" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }}>
          <FormGroup>
            <Input type="select" name="select" id="exampleSelect">
              <option>M.</option>
              <option>Mme</option>
              <option>Mlle</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }}>
          <FormGroup>
            <Input type="text" name="lastname" id="lastname" placeholder="Nom" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }}>
          <FormGroup>
            <Input type="text" name="firstname" id="firstname" placeholder="Prénom" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }}>
          <FormGroup>
            <Input type="email" name="email" id="exampleEmail" placeholder="exemple@email.com" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }}>
          <FormGroup>
            <Input type="text" name="address" id="exampleAddress" placeholder="Siège social" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }}>
          <FormGroup>
            <Input type="text" name="address2" id="exampleAddress2" placeholder="Complément d'adresse" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 6, offset: 3 }} md={{ size: 3, offset: 3 }}>
          <FormGroup>
            <Input type="text" name="city" id="exampleCity" placeholder="Ville" />
          </FormGroup>
        </Col>
        <Col xs={{ size: 6, offset: 3 }} md={{ size: 3, offset: 0 }}>
          <FormGroup>
            <Input type="text" name="zip" id="exampleZip" placeholder="Code postale" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }}>
          <FormGroup>
            <Input type="text" name="country" id="country" placeholder="Pays" />
          </FormGroup>
        </Col>
      </Row>
      <Row className="mt-lg-5">
        <Col>
          <h5>Attribution identifiant et mot de passe</h5>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }}>
          <FormGroup>
            <Input type="text" name="identifiant" id="identifiant" placeholder="Identifiant" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }}>
          <FormGroup>
            <Input type="password" name="password" id="password" placeholder="Mot de passe" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }}>
          <FormGroup>
            <Input type="password" name="password" id="password" placeholder="Vérification du mot de passe" />
          </FormGroup>
        </Col>
      </Row>
      <Row className="mt-lg-5">
        <Col xs={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }}>
          <Button className="btn">Créer</Button>
        </Col>
      </Row>
    </Form>
  </div>
);

export default CompanyCreation;
