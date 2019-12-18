import constants from './../constants';
const { initialState, types } = constants;

const memberLeaguesReducer = (state = initialState.memberLeagues, action) => {
  switch (action.type) {
    case types.ADD_MEMBER_TO_LEAGUE:
      let addMember = action.currentUser.displayName;
      let newArray = state[action.id].members;
      if (newArray.includes(addMember)) {
        alert('You\'ve already joined this league!');
      } else {
        return {
          ...state,
          [action.id]: {
            ...state[action.id],
            members: [...newArray, addMember]
          }
        }
      }
    default:
      return state
  }
};

export default memberLeaguesReducer;