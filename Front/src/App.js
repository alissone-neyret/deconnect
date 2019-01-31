import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ContactPage from './components/pages/ContactPage';
import CompanyPage from './components/pages/CompanyPage';
import CompanyAccountPage from './components/pages/CompanyAccountPage';
import AboutUsPage from './components/pages/AboutUsPage';
import LeaveReviewPage from './components/pages/LeaveReviewPage';
import LegalNoticePage from './components/pages/LegalNoticePage';
import ResultPage from './components/pages/ResultPage';
import AdminPage from './components/pages/AdminPage';
import CreateCompany from './components/pages/CreateCompany';
import CompanyRecord from './components/CompanyRecord';
import './App.scss';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import ButtonBackToTop from './components/ButtonBackToTop';
import AddCompany from './components/AddCompany';


const App = () => (
  <div className="App">
    <NavBar />

    <Route onUpdate={window.scrollTo(0, 0)} exact path="/" component={HomePage} />
    <Route onUpdate={window.scrollTo(0, 0)} path="/laisser-un-avis" component={LeaveReviewPage} />
    <Route onUpdate={window.scrollTo(0, 0)} path="/fiche-entreprise" component={CompanyPage} />
    <Route onUpdate={window.scrollTo(0, 0)} path="/compte-entreprise" component={CompanyAccountPage} />
    <Route onUpdate={window.scrollTo(0, 0)} path="/a-propos" component={AboutUsPage} />
    <Route onUpdate={window.scrollTo(0, 0)} path="/contact" component={ContactPage} />
    <Route onUpdate={window.scrollTo(0, 0)} path="/mentions-legales" component={LegalNoticePage} />
    <Route path="/result-page" component={ResultPage} />
    <Route onUpdate={window.scrollTo(0, 0)} path="/page-admin" component={AdminPage} />
    <Route onUpdate={window.scrollTo(0, 0)} path="/update-company" component={CompanyRecord} />
    <Route onUpdate={window.scrollTo(0, 0)} path="/add" component={AddCompany} />
    <Route onUpdate={window.scrollTo(0, 0)} path="/create-company" component={CreateCompany} />
    <ButtonBackToTop />
    <Footer />
  </div>
);

export default App;
