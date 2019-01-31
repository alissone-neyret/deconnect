import React from 'react';
import './SuggestCompany.scss';

const SuggestCompany = (props) => {
  const { filterName, handleClickName } = props;
  let myList;
  if (filterName.length === 0) {
    myList = (
      <ul className="list-result">
        <li className="no-result-message">Aucun résultat, modifiez vos paramètres de recherche</li>
      </ul>
    );
  } else if (filterName.length <= 2) {
    myList = (
      <ul className="list-result">
        {
          filterName.map(suggest => (
            <li key={suggest}>
              <button className="button-list" type="button" onClick={() => handleClickName(suggest)}>
                {suggest}
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
            <li>
              <button className="button-list" type="button" onClick={() => handleClickName(suggest)}>
                {suggest}
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
    <div className="SuggestCompany">
      {myList}
    </div>
  );
};
export default SuggestCompany;
