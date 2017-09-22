const SEARCH = 'SEARCH';
const SEARCH_COMPLETED = 'SEARCH_COMPLETED';
const SEARCH_ERR = 'SEARCH_ERR';

function search(searchString) {
  return {
    type: SEARCH,
    payload: {
      searchString,
    },
  };
}

function searchCompleted(results) {
  return {
    type: SEARCH_COMPLETED,
    payload: {
      results,
    },
  };
}

function error(err) {
  return {
    type: SEARCH_ERR,
    payload: {
      err,
    },
  };
}

export default {
  names: {
    SEARCH,
    SEARCH_COMPLETED,
    SEARCH_ERR,
  },
  creators: {
    search,
    searchCompleted,
    error,
  },
};
