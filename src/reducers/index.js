import { combineReducers } from 'redux';
import dailyMatchesReducer from './dailyMatchesReducer';
import memberLeaguesReducer from './memberLeaguesReducer';



const rootReducer = combineReducers({
  dailyMatches: dailyMatchesReducer,
  memberLeagues: memberLeaguesReducer
});

export default rootReducer;