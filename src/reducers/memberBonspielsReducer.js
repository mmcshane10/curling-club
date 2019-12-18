import constants from '../constants';
const { initialState, types } = constants;

const memberBonspielsReducer = (state = initialState.memberBonspiels, action) => {
  switch (action.type) {
    case types.ADD_MEMBER_TO_BONSPIEL:
      let addMember = action.currentUser.displayName;
      let newArray = state[action.id].members
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          members: [...newArray, addMember]
        }
      }
    default:
      return state
  }
};

export default memberBonspielsReducer;