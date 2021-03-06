/* eslint react/forbid-prop-types : 1 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchResultItem from './search-result-item';
import Selectors from '../search/selector';

const SearchResults = ({ searchResults }) => {
  const results = searchResults.map(item =>
    <SearchResultItem key={item.id} item={item} />);
  return (
    <ul>{results}</ul>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.array,
};

SearchResults.defaultProps = {
  searchResults: [],
};

function mapStateToProps(state) {
  return {
    searchResults: Selectors.items(state),
     // state.searchReducer.currentResult.items,
  };
}

// const mapDespatchToProps = () => ('');

export default connect(mapStateToProps)(SearchResults);
