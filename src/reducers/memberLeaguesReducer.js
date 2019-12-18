import constants from './../constants';
const { initialState, types } = constants;

const memberLeaguesReducer = (state = initialState.memberLeagues, action) => {
  switch (action.type) {
    case types.ADD_MEMBER_TO_LEAGUE:
      console.log('Im in the reducer! ', action.id);
      return state
    default:
      return state 
  }
};

export default memberLeaguesReducer;