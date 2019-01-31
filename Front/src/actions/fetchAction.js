import { API_SERVEUR } from '../Constants';

export const HasErrored = bool => ({
  type: 'HAS_ERRORED',
  error: bool,
});

export const IsLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool,
});

// fetch company

export const FetchCompanyIdSuccess = companyIdData => ({
  type: 'FETCH_COMPANY_ID_SUCCESS',
  companyIdData,
});

export const fetchCompanyId = id => (dispatch) => {
  dispatch(IsLoading(true));
  fetch(`${API_SERVEUR}/api/companies/${id}`)
    .then(res => res.json())
    .then(data => dispatch(FetchCompanyIdSuccess(data[0])))
    .then(() => dispatch(IsLoading(false)))
    .catch(() => dispatch(HasErrored(true)));
};
