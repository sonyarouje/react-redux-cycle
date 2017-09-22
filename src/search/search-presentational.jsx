/* eslint fp/no-let : 1 */
/* eslint no-return-assign: 1 */
/* eslint fp/no-mutation : 1 */
import React from 'react';
import PropTypes from 'prop-types';

const SearchPresentational = ({ onSearchClick }) => {
  let input = 0;
  return (
    <div>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search git repo..."
          ref={node => input = node}
        />
        <span className="input-group-btn">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => onSearchClick(input.value)}
          >Go</button>
        </span>
      </div>
    </div>
  );
};

SearchPresentational.propTypes = {
  onSearchClick: PropTypes.func.isRequired,
};

export default SearchPresentational;
