const initialState = [];

const companyToPutReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COMPANY_TO_PUT_REQUEST':
      return [...state, action.companyId];
    default:
      return state;
  }
};
export default companyToPutReducer;
