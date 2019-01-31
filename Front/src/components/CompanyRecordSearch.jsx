import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Button, Container, Col, Row,
} from 'reactstrap';
import { fetchCompanyId } from '../actions/fetchAction';
import SimpleSearchBarAdmin from '../containers/SimpleSearchBarAdmin';
import ResultCardAdmin from '../containers/ResultCardAdmin';
import './CompanyRecordSearch.scss';
import AddCompany from './AddCompany';

class CompanyRecordSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleAddCompany: false,
      toggleResults: false,
    };
    this.showAddCompany = this.showAddCompany.bind(this);
    this.showResults = this.showResults.bind(this);
  }

  showAddCompany() {
    const { toggleAddCompany } = this.state;
    this.setState({
      toggleAddCompany: !toggleAddCompany,
      toggleResults: false,
    });
  }

  showResults() {
    this.setState({
      toggleResults: true,
    });
  }

  render() {
    const { toggleAddCompany, toggleResults } = this.state;
    const { searchResults } = this.props;
    return (
      <div className="CompanyRecordSearch">
        <Container fluid className="container-header-companies-admin">
          <Row>
            <Col>
              <h2>Rechercher une fiche Entreprise</h2>
              <SimpleSearchBarAdmin showResults={this.showResults} />
            </Col>
            <Col>
              <h2>Créer une fiche Entreprise</h2>
              <Button className="btn" onClick={this.showAddCompany}>
                Ajout d&apos;une entreprise
              </Button>
            </Col>
          </Row>
        </Container>
        <hr />
        <section>
          {toggleAddCompany ? <AddCompany toggle={this.showAddCompany} /> : <div />}
          {toggleResults ? (
            searchResults.map(comp => (
              <ResultCardAdmin key={comp.idCompany} comp={comp} />
            ))
          ) : (
            <div />
          )}
        </section>
      </div>
    );
  }
}

const mstp = state => ({
  companyInfo: state.companyInfo,
  searchResults: state.companySearchStatus,
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
)(CompanyRecordSearch);
