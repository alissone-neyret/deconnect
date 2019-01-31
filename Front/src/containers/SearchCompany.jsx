import React from 'react';
import './SearchCompany.scss';


const SearchCompany = (props) => {
  const { handleChange, searchName, required } = props;
  return (
    <input
      {...required}
      className="SearchCompany"
      placeholder="Nom de l'entreprise"
      name="NameCompany"
      value={searchName}
      onChange={handleChange}
      autoComplete="off"
    />
  );
};

export default SearchCompany;
