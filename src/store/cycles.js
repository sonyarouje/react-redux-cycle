import { combineCycles } from 'redux-cycles';
import searchCycle from '../search/cycle';

const cycles = combineCycles(
    searchCycle,
);

export default cycles;
