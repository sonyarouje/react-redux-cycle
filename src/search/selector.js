import { createSelector } from 'reselect';

const searchState = state => state.search;
const searchString = createSelector(searchState, srchString => srchString.searchString);
const items = createSelector(searchState, search => search.currentResult.items);

export default {
  searchString,
  items,
};
