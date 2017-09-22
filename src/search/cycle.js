import xs from 'xstream';
import Action from './action';

function searchCycle(sources) {
  const request$ = sources.ACTION
        .filter(action => action.type === Action.names.SEARCH)
        .map(action => ({
          url: `https://api.github.com/search/repositories?q=${action.payload.searchString}`,
          method: 'GET',
          category: 'search',
        }));

  const response$ = sources.HTTP
        .select('search')
        .map(resp$ =>
            resp$.replaceError(err =>
              xs.of(err.response),
        ))
        .flatten()
        .map(res => (res.err ?
        Action.creators.error(res.err) :
        Action.creators.searchCompleted(res.body)),
    );

  return {
    ACTION: response$,
    HTTP: request$,
  };
}

export default searchCycle;
