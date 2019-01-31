import React from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  Button,
  Container,
  Row,
  Col,
}
  from 'reactstrap';
import './AdminPage.scss';
import CompanyRecordSearch from '../CompanyRecordSearch';
import CompanyCreation from '../CompanyCreation';
import CompanyReviews from '../CompanyReviews';
import TextReview from '../TextReview';

export default class AdminPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div className="AdminPage">
        <section>
          <Container fluid className="admin-container">
            <Row>
              <Col>
                <h2>Espace Administrateur</h2>
              </Col>
            </Row>
            <Row className="row-nav-tabs">
              <Nav tabs>
                <Col md={3} className="col-nav-tabs">
                  <Button
                    className={(activeTab === '1') ? 'nav-tab active' : 'nav-tab'}
                    onClick={() => this.toggle('1')}
                  >
                    Gestion des fiches entreprises
                  </Button>
                </Col>
                <Col md={3}>
                  <Button
                    className={(activeTab === '2') ? 'nav-tab active' : 'nav-tab'}
                    onClick={() => this.toggle('2')}
                  >
                    Gestion des comptes entreprises
                  </Button>
                </Col>
                <Col md={3}>
                  <Button
                    className={(activeTab === '3') ? 'nav-tab active' : 'nav-tab'}
                    onClick={() => this.toggle('3')}
                  >
                    Modération des avis
                  </Button>
                </Col>
                <Col md={3}>
                  <Button
                    className={(activeTab === '4') ? 'nav-tab active' : 'nav-tab'}
                    onClick={() => this.toggle('4')}
                  >
                    Modification des textes
                    {' '}
                  </Button>
                </Col>
              </Nav>
            </Row>
            <Row>
              <Col>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <CompanyRecordSearch />
                  </TabPane>
                  <TabPane tabId="2">
                    <CompanyCreation />
                  </TabPane>
                  <TabPane tabId="3">
                    <CompanyReviews />
                  </TabPane>
                  <TabPane tabId="4">
                    <TextReview />
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}
