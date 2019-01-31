import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Button, Container, Form, Col, Row, Label, Input, FormGroup,
}
  from 'reactstrap';
import { fetchCompanyId } from '../actions/fetchAction';

import './CompanyRecord.scss';
import { API_SERVEUR } from '../Constants';


class CompanyRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      companyName: '',
      logo: '',
      description: '',
      email: '',
      address: '',
      phoneNumber: '',
      website: '',
      referent: '',
      imagePreviewUrl: '',
    };
    this.showEditMode = this.showEditMode.bind(this);
    this.cancelModification = this.cancelModification.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  componentDidMount = () => {
    const { location } = this.props;
    const { query } = location;
    fetch(`${API_SERVEUR}/api/companies/${query}`)
      .then(response => response.json())
      .then((data) => {
        // setstate to set up the labels
        this.setState({

          companyName: data[0].companyName,
          logo: data[0].logo,
          description: data[0].description,
          email: data[0].email,
          address: data[0].address,
          phoneNumber: data[0].phoneNumber,
          website: data[0].website,
          referent: data[0].referent,
          id: data[0].idCompany,
        });
      })

      .catch(err => (`Caught error: ${err}`));
  }

  // fonction set up the state with input entry
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // post the form to the data base
  handleSubmit(e) {
    const { location, history } = this.props;
    const { query } = location;
    const {
      logo, description, email,
      address, phoneNumber, website, referent,
    } = this.state;
    const dataUsers = {
      idCompany: query,
      logo,
      description,
      email,
      address,
      phoneNumber,
      website,
      referent,
    };


    e.preventDefault();

    // function to modify company informations

    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataUsers),
    };

    const url = `${API_SERVEUR}/calldoor/company/${query}`;

    fetch(url, config)
      .then(res => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          alert('Entreprise modifiée');
        }
      })
      .then(
        () => {
          history.push('/page-admin');
        },
      )
      .catch(() => {
        alert(`Erreur ${e} lors de la modification d'une entreprise`);
      });

    this.setState(prevState => prevState);
  }

  // delete company
  handleDelete() {
    const { history } = this.props;
    const { id } = this.state;
    fetch(`${API_SERVEUR}/company/${id}`,
      {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': { API_SERVEUR },
        }),
      })
      .then(alert('Entreprise supprimée !'))
      .then(() => history.push('/page-admin'));
  }

  // transform image to HEX64 file before sending in BDD
  handleImageChange(e) {
    // e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        logo: reader.result,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }

  showEditMode() {
    this.setState({
      editMode: true,
    });
  }

  cancelModification() {
    this.setState({
      editMode: false,
    });
  }


  render() {
    const {
      editMode, companyName, description, email,
      address, phoneNumber, website, referent, logo, imagePreviewUrl,
    } = this.state;

    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img alt="update" src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText" />);
    }
    return (
      <div className="CompanyRecord">
        <hr />
        {editMode ? (
          <Container className="container-info-company modify">
            <Form onSubmit={e => this.handleSubmit(e)}>
              <Row>
                <Col lg={6} xs={12} className="company-name">
                  {logo != null
                    ? (<img className="logo-company" src={logo} alt="Logo de l'entreprise" />
                    ) : (<img className="logo-company" src="/medias/placeholder-logo-company.png" alt="Logo Vide" />
                    )}

                  <div className="contact-details">
                    <FormGroup row>
                      <Label className="tabulation-company-details-mail">Email :</Label>
                      <Col sm={10}>
                        <Input
                          type="email"
                          name="email"
                          id="exampleEmail"
                          onChange={this.onChange}
                          value={email}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label className="tabulation-company-details-website">Website :</Label>
                      <Col sm={10}>
                        <Input
                          type="text"
                          name="website"
                          id="website"
                          onChange={this.onChange}
                          value={website}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label className="tabulation-company-details-tel">Tel :</Label>
                      <Col sm={10}>
                        <Input
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                          onChange={this.onChange}
                          value={phoneNumber}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label className="tabulation-company-details-referent">Référent droit à la déconnexion :</Label>
                      <Col sm={10}>
                        <Input
                          type="text"
                          name="referent"
                          id="referent"
                          onChange={this.onChange}
                          value={referent}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label className="tabulation-company-details-adress">Adresse :</Label>
                      <Col sm={10}>
                        <Input
                          type="text"
                          name="address"
                          id="address"
                          onChange={this.onChange}
                          value={address}
                        />
                      </Col>
                    </FormGroup>
                  </div>
                </Col>
                <Col lg={6} xs={12} className="company-describe">
                  <h2>
                    {companyName}
                  </h2>
                  <FormGroup row>
                    <Col>
                      <Label className="describe-company-text">Description de l&apos;entreprise :</Label>
                      <Input
                        rows="10"
                        type="textarea"
                        name="description"
                        id="exampletextarea"
                        onChange={this.onChange}
                        value={description}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col>
                      <Label className="describe-company-text">Mettre à jour un logo :</Label>
                      <Input
                        className="fileInput"
                        type="file"
                        name="logo"
                        id="imagefile"
                        onChange={e => this.handleImageChange(e)}

                      />
                    </Col>
                  </FormGroup>

                  <div className="imgPreview">
                    {$imagePreview}
                  </div>


                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <Button className="danger" onClick={() => this.cancelModification()}>Annuler</Button>
                </Col>
                <Col sm={6}>
                  <Button className="blue" type="submit" onClick={e => this.handleSubmit(e)}>Enregistrer</Button>
                </Col>
              </Row>
            </Form>

          </Container>
        )

          : (
            <Container className="container-info-company">
              <Row className="row-container-info-company">
                <Col lg={6} sm={12} className="company-name">
                  {logo != null
                    ? (<img className="logo-company" src={logo} alt="Logo de l'entreprise" />
                    ) : (<img className="logo-company" src="/medias/placeholder-logo-company.png" alt="Logo Vide" />
                    )}
                  <div className="contact-details">
                    <p className="address">
                      <Label className="tabulation-company-details-adress">Adresse :</Label>
                      {address}
                    </p>
                    <p className="deconnection-contact">
                      <Label className="tabulation-company-details-referent">Référent droit à la déconnexion :</Label>
                      {referent}
                    </p>
                    <p className="email">
                      <Label className="tabulation-company-details-mail">Email :</Label>
                      {email}
                    </p>
                    <p className="tel">
                      <Label className="tabulation-company-details-tel">Tel :</Label>
                      {phoneNumber}
                    </p>
                  </div>
                </Col>
                <Col lg={6} sm={12} className="company-describe">
                  <h2>
                    {companyName}
                  </h2>
                  <p className="describe-company-text">
                    Description de l&apos;entreprise :
                    <br />
                    {description}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <Button className="danger" onClick={() => { this.handleDelete(); }}>Supprimer cette fiche</Button>
                </Col>
                <Col sm={6}>
                  <Button className="blue" onClick={() => { this.showEditMode(); }}>Modifier cette fiche</Button>
                </Col>
              </Row>
            </Container>
          )
        }
      </div>
    );
  }
}
const mstp = state => ({
  companyInfo: state.companyInfo,
  searchResults: state.companySearchStatus,

});


const mdtp = dispatch => bindActionCreators({
  fetchCompanyIdRedux: fetchCompanyId,
}, dispatch);

export default connect(mstp, mdtp)(CompanyRecord);
