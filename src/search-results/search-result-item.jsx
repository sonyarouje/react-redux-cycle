import React from 'react';
import PropTypes from 'prop-types';

const SearchResultItem = ({ item }) => (
  <li> {item.name}:{item.description} </li>
);

SearchResultItem.propTypes = {
    item: PropTypes.object, //eslint-disable-line
};

export default SearchResultItem;
