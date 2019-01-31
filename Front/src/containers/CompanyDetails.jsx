import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { fetchCompanyId } from '../actions/fetchAction';

import './CompanyDetails.scss';
import { API_SERVEUR } from '../Constants';

class CompanyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: 0,
      answersForNote: 0,
    };
  }

  componentDidMount = () => {
    const { id } = this.props;
    const { fetchCompanyIdRedux } = this.props;
    fetchCompanyIdRedux(id);
    const url = `${API_SERVEUR}/api/note/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState(
        {
          answersForNote: data,
        },
        () => {
          const { answersForNote } = this.state;
          this.getNote(answersForNote);
        },
      ));
  };

  getNote(array) {
    const result = array.map(x => parseInt(x.reviewGrade, 10));
    this.setState({
      note: (
        result.reduce((a, b) => a + b, 0) / Object.keys(array).length
      ).toPrecision(3),
    });
  }

  render() {
    const { companyInfo } = this.props;
    const {
      address,
      description,
      email,
      logo,
      companyName,
      phoneNumber,
      website,
    } = companyInfo;
    const { note, answersForNote } = this.state;
    return (
      <div className="CompanyDetails">
        <Container className="container-info-company">
          <Row className="row-title-company">
            <Col lg="6" sm="12" className="company-describe">
              <h2>
                {companyName}
              </h2>
            </Col>
          </Row>
          <Row className="row-company-describe">
            <Col lg="6" sm="12" className="company-name">
              <img className="image-company" src={logo} alt="logo company edf" />
            </Col>
            <Col lg="6" sm="12" className="col-describe-company-text mt-5">
              <p className="describe-company-text">
                <h3>Description de l&apos;entreprise</h3>
                {description}
              </p>
            </Col>
          </Row>
          <Row className="graduate-resume">
            <Col lg="6" sm="12" className="col-details-company">
              <p className="address">
                <span className="label-company-details">
                  Adresse :
                </span>
                {address}
              </p>
              <p className="deconnection-contact">
                <span className="label-company-details">
                  Référent droit à la déconnexion :
                </span>
              </p>
              <p className="tel">
                <span className="label-company-details">
                  Tel :
                </span>
                {phoneNumber}
              </p>
              <p className="email">
                <span className="label-company-details">
                  Email :
                </span>
                {email}
              </p>
              <p className="website">
                <span className="label-company-details">
                  Site web :
                </span>
                {website}
              </p>
            </Col>
            <Col className="col-graduate" lg="6" sm="12">
              <h3>Droit à la déconnexion dans cette entreprise</h3>
              <br />
              <h3 className="graduation">
                Note moyenne
                <p className="company-grade">
                  {' '}
                  {`${note} / 5`}
                </p>
              </h3>
              <img className="image-graduate-resume" src="/medias/rating2.png" alt="notation en étoiles" />
              <h3 className="number-report">
                Nombre d&apos;avis
              </h3>
              <p className="number-review">{Object.keys(answersForNote).length}</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

CompanyDetails.propTypes = {
  fetchCompanyIdRedux: PropTypes.func.isRequired,
};

const mstp = state => ({
  companyInfo: state.companyInfo,
});

const mdtp = dispatch => bindActionCreators(
  {
    fetchCompanyIdRedux: fetchCompanyId,
  },
  dispatch,
);

export default connect(
  mstp,
  mdtp,
)(CompanyDetails);
