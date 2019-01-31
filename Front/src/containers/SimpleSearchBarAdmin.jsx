import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SearchCompanyClick } from '../actions/CompanySearchRequestAction';
import SearchCompany from './SearchCompany';
import SuggestCompany from './SuggestCompany';
import './SimpleSearchBarAdmin.scss';
import { API_SERVEUR } from '../Constants';

class SimpleSearchBarAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: '',
      results: [],
      filterName: [],
      visible: false,
      arrayFetch: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickName = this.handleClickName.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchInfo();
  }

  useFetchInfo(obj) {
    let arrayCompanyResult = [];
    for (let i = 0; i < Object.keys(obj).length; i += 1) {
      arrayCompanyResult.push(obj[i].companyName);
      // eliminate duplicate on Company
      arrayCompanyResult = arrayCompanyResult.filter((
        company, index, companylist,
      ) => companylist.indexOf(company) === index);
      this.setState({
        results: arrayCompanyResult,
      });
    }
  }

  fetchInfo() {
    const url = `${API_SERVEUR}/companies`;

    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({
        arrayFetch: data,
      }, () => {
        const { arrayFetch } = this.state;
        this.useFetchInfo(arrayFetch);
      }))
      .catch(err => (`Caught error: ${err}`));
  }

  handleInputChange() {
    const { results, searchName } = this.state;
    if (searchName.length > 0) {
      this.setState({
        visible: true,
        filterName: results.filter(name => name.toLowerCase().includes(searchName.toLowerCase())),
      });
    } else if (searchName.length === 0) {
      this.setState({
        filterName: [],
        visible: false,
      });
    }
  }

  handleChange(e) {
    this.setState({
      searchName: e.target.value,
    }, () => this.handleInputChange());
  }

  handleClickName(suggest) {
    this.setState({
      searchName: suggest,
      visible: false,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { searchName } = this.state;
    const { SearchCompanyClickRedux, showResults } = this.props;
    let url;
    if (searchName) {
      url = `${API_SERVEUR}/search?companyName=%${searchName}%`;
    } else {
      url = `${API_SERVEUR}/search`;
    }
    fetch(url)
      .then(res => res.json())
      .then(dataResults => SearchCompanyClickRedux(dataResults));
    showResults();
  }

  render() {
    const {
      visible,
      filterName,
      searchName,
    } = this.state;
    return (
      <form className="SimpleSearchBarAdmin" onSubmit={this.handleSubmit}>
        <div className="searchbar">
          <SearchCompany
            searchName={searchName}
            handleChange={this.handleChange}
          />
          {visible ? (
            <SuggestCompany
              filterName={filterName}
              handleClickName={this.handleClickName}
            />
          ) : null}
        </div>
        <button className="search-button" type="submit">
          <img src="/medias/search-icon.png" alt="Rechercher" />
        </button>
      </form>
    );
  }
}
const mdtp = dispatch => bindActionCreators({
  SearchCompanyClickRedux: SearchCompanyClick,
}, dispatch);


export default connect(null, mdtp)(SimpleSearchBarAdmin);
