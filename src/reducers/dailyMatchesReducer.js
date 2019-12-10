import constants from './../constants';
const { initialState, types } = constants;

const dailyMatchesReducer = (state = initialState.dailyMatches, action) => {
  switch (action.type) {
  case types.RECEIVE_DAILY_MATCHES:
    return action.dailyMatches;
  default:
    return state;
  }
};

export default dailyMatchesReducer;