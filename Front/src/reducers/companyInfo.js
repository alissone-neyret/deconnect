
const initialState = [];

const companyInfo = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COMPANY_ID_SUCCESS':
      return action.companyIdData;
    default:
      return state;
  }
};

export default companyInfo;
