import constants from './../constants';
const { initialState, types } = constants;

const memberLeaguesReducer = (state = initialState.memberLeagues, action) => {
  switch (action.type) {
    case types.ADD_MEMBER_TO_LEAGUE:
      console.log('Im in the reducer! ', action.id, action.currentUser);
      let addMember = action.currentUser.displayName;
      return {
        ...state,
        [action.id]: { members : [...members, addMember] }
      }
    default:
      return state 
  }
};

export default memberLeaguesReducer;