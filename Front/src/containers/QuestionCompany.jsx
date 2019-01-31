import React from 'react';
import {
  Label,
} from 'reactstrap';
import SuggestCompanyQuestionnaire from './SuggestCompanyQuestionnaire';
import SearchCompany from './SearchCompany';
import './QuestionCompany.scss';

const QuestionCompany = (props) => {
  const {
    NameCompany, handleChange, filterName, handleClickName, visible,
  } = props;
  return (
    <form className="QuestionCompany">
      <Label for="NameCompany">Nom de l&apos;entreprise</Label>
      <div className="searchbar">
        <SearchCompany
          searchName={NameCompany}
          handleChange={handleChange}
        />
        {visible ? (
          <SuggestCompanyQuestionnaire
            filterName={filterName}
            handleClickName={handleClickName}
          />
        ) : null}
      </div>
    </form>
  );
};


export default QuestionCompany;
