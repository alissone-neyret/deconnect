import React from 'react';
import { Link } from 'react-router-dom';
import './SuggestCompanyQuestionnaire.scss';

const SuggestCompanyQuestionnaire = (props) => {
  const { filterName, handleClickName } = props;
  let myList;
  if (filterName.length === 0) {
    myList = (
      <ul className="list-result">
        <li className="no-result-message">Aucun résultat, modifiez vos paramètres de recherche</li>
        <li><Link to="/create-company" href="/create-company"> Ou créer l&apos;entreprise sur laquelle vous souhaitez laisser un avis !</Link></li>
      </ul>
    );
  } else if (filterName.length <= 2) {
    myList = (
      <ul className="list-result">
        {
          filterName.map(suggest => (
            <li key={suggest.idCompany}>
              <button className="button-list" type="button" onClick={() => handleClickName(suggest)}>
                {suggest.companyName}
              </button>
            </li>
          ))
        }
      </ul>
    );
  } else {
    myList = (
      <ul className="list-result">
        {
          filterName.map(suggest => (
            <li key={suggest.idCompany}>
              <button className="button-list" type="button" onClick={() => handleClickName(suggest)}>
                {suggest.companyName}
              </button>
            </li>
          )).slice(0, 2)
        }
        <li className="nb-search-result">
          {`+ ${filterName.length - 2} résultat(s) trouvé(s)`}
        </li>
      </ul>
    );
  }
  return (
    <div className="SuggestCompanyQuestionnaire">
      {myList}
    </div>
  );
};
export default SuggestCompanyQuestionnaire;
