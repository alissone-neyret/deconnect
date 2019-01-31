export const SearchCompanyClick = companySearchRequest => ({
  type: 'COMPANY_SEARCH_REQUEST',
  companySearchRequest,
});

export const CompanyToPutClick = companyId => ({
  type: 'COMPANY_TO_PUT_REQUEST',
  companyId,
});
