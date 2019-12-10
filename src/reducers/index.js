import { combineReducers } from 'redux';
import dailyMatchesReducer from './dailyMatchesReducer';


const rootReducer = combineReducers({
  dailyMatches: dailyMatchesReducer
});

export default rootReducer;