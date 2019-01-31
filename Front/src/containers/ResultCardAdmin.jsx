import React, { Component } from 'react';
import {
  Row, Col, Button, Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './ResultCardAdmin.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CompanyToPutClick } from '../actions/CompanySearchRequestAction';

class ResultCardAdmin extends Component {
  constructor(props) {
    super(props);

    this.ClickSubmit = this.ClickSubmit.bind(this);
  }

  ClickSubmit() {
    const { CompanyToPutClickRedux, comp } = this.props;
    const { idCompany } = comp;
    CompanyToPutClickRedux(idCompany);
  }

  render() {
    const { comp } = this.props;
    return (
      <Container key={comp.idCompany} className="ResultCardAdmin">
        <Row className="row-title-company">
          <Col lg="6" sm="12" className="company-describe">
            <h2>
              {comp.companyName}
            </h2>
          </Col>
        </Row>
        <Row className="header-jumbotron-company">
          <Col lg="6" sm={{ size: 12 }}>
            {comp.logo != null
              ? (<img className="logo-company" src={comp.logo} alt="Logo de l'entreprise" />
              ) : (<img className="logo-company" src="/medias/placeholder-logo-company.png" alt="Logo Vide" />
              )}

          </Col>
          <Col className="col-description" lg="6" sm={{ size: 12 }}>
            <p className="description-label">
              Description de l&apos;entreprise :
            </p>
            <p className="description-text">
              {comp.description}
            </p>
          </Col>
        </Row>
        <Link to={{ pathname: '/update-company', query: comp.idCompany }}>
          <Button color="primary" onClick={this.ClickSubmit}>
            Modifier cette entreprise
          </Button>
        </Link>
      </Container>
    );
  }
}
const mdtp = dispatch => bindActionCreators({
  CompanyToPutClickRedux: CompanyToPutClick,
}, dispatch);


export default connect(null, mdtp)(ResultCardAdmin);
