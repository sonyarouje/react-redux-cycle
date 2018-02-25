import { combineReducers } from 'redux';
import searchReducer from '../search/reducer';

const reducers = combineReducers({
  search: searchReducer,
});

export default reducers;

