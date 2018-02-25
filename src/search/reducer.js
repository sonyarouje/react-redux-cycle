import Action from './action';

const initState = {
  cache: {},
  currentResult: {},
  searchString: '',
};

function reducer(state = initState, action) {
  switch (action.type) {
    case Action.names.SEARCH: {
      console.log(action.payload); //eslint-disable-line
      const newState = {
        ...state,
        searchString: action.payload.searchString,
      };
      return newState;
    }

    case Action.names.SEARCH_COMPLETED: {
      const newState = {
        ...state,
        currentResult: action.payload.results,
      };
      return newState;
    }

    default:
      break;
  }
  return state;
}

export default reducer;
