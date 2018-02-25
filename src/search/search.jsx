
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchPresentational from './search-presentational';
import Action from './action';
import SearchResults from '../search-results/search-results';

const Search = ({ onSearchClick, searchString }) => {
  console.log(searchString); //eslint-disable-line
  return (
    <div>
      <SearchPresentational onSearchClick={onSearchClick} />
      <SearchResults />
    </div>
  );
};

Search.propTypes = {
  onSearchClick: PropTypes.func.isRequired,
  searchString: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    searchString: state.searchReducer.searchString,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchClick: searchString => dispatch(Action.creators.search(searchString)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
