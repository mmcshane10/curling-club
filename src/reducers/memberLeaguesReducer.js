import constants from './../constants';
const { initialState, types } = constants;

const memberLeaguesReducer = (state = initialState.memberLeagues, action) => {
  switch (action.type) {
    case types.ADD_MEMBER_TO_LEAGUE:
      console.log('Im in the reducer! ', action.id, action.currentUser);
      let addMember = action.currentUser.displayName;
      let newArray = state[action.id].members
      console.log('members list: ', newArray);
      return {
        ...state,
        [action.id]:{ 
          ...state[action.id],
          members : [...newArray, addMember] }
      }
    default:
      return state 
  }
};

export default memberLeaguesReducer;