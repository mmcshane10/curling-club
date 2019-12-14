import { combineReducers } from 'redux';
import dailyMatchesReducer from './dailyMatchesReducer';
import memberLeaguesReducer from './memberLeaguesReducer';
import memberBonspielsReducer from './memberBonspielsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  dailyMatches: dailyMatchesReducer,
  memberLeagues: memberLeaguesReducer,
  memberBonspiels: memberBonspielsReducer,
  auth: authReducer
});

export default rootReducer;