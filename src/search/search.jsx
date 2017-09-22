import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchPresentational from './search-presentational';
import Action from './action';


const Search = ({ onSearchClick }) => (
  <SearchPresentational onSearchClick={onSearchClick} />
);

Search.propTypes = {
  onSearchClick: PropTypes.func.isRequired,
};

function mapStateToProps() {
  return 1;
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchClick: searchString => dispatch(Action.creators.search(searchString)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
