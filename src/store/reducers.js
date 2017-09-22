import { combineReducers } from 'redux';
import searchReducer from '../search/reducer';

const reducers = combineReducers({
  searchReducer,
});

export default reducers;

