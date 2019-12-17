import { combineReducers } from 'redux';
import dailyMatchesReducer from './dailyMatchesReducer';
import memberLeaguesReducer from './memberLeaguesReducer';
import memberBonspielsReducer from './memberBonspielsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  dailyMatches: dailyMatchesReducer,
  memberLeagues: memberLeaguesReducer,
  memberBonspiels: memberBonspielsReducer,
  currentUser: userReducer
});

export default rootReducer;