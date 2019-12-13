import { combineReducers } from 'redux';
import dailyMatchesReducer from './dailyMatchesReducer';
import memberLeaguesReducer from './memberLeaguesReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  dailyMatches: dailyMatchesReducer,
  memberLeagues: memberLeaguesReducer,
  auth: authReducer
});

export default rootReducer;