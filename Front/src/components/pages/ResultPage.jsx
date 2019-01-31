import React from 'react';
import {
  Container, Row, Col,
} from 'reactstrap';
import { connect } from 'react-redux';
import './ResultPage.scss';
import SimpleSearchBar from '../../containers/SimpleSearchBar';
import ResultCard from '../../containers/ResultCard';

const ResultPage = (props) => {
  const { searchResults } = props;
  return (
    <div className="ResultPage">
      <Container fluid className="container-search-resultpage">
        <Row>
          <Col>
            <div className="background-search-bar">
              <h1>
                Droit à la déconnexion pour un
                bon équilibre pro/perso :
                <br />
                qu&apos;en pensent leurs salariés ?
              </h1>
              <SimpleSearchBar />
            </div>
          </Col>
        </Row>
      </Container>
      <section className="mt-3 mt-lg-5">
        {
          (searchResults.length > 0)
            ? searchResults.map(comp => <ResultCard comp={comp} />)
            : <div />
        }
      </section>
    </div>
  );
};

function mstp(state) {
  return {
    searchResults: state.companySearchStatus,
  };
}

export default (connect(mstp))(ResultPage);
