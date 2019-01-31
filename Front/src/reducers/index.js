import { combineReducers } from 'redux';
import companySearchStatus from './companySearchStatus';
import { itemsHasErrored, isLoading } from './fetchitems';
import companyToPutReducer from './companyToPutReducer';
import companyInfo from './companyInfo';

const allReducers = combineReducers({
  itemsHasErrored,
  isLoading,
  companyInfo,
  companySearchStatus,
  companyToPutReducer,
});

export default allReducers;
