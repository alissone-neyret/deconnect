const initialState = [];

const companySearchStatus = (state = initialState, action) => {
  switch (action.type) {
    case 'COMPANY_SEARCH_REQUEST':
      return [...action.companySearchRequest];
    default:
      return state;
  }
};
export default companySearchStatus;
