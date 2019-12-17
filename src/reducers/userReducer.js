import constants from './../constants';
const { initialState, types } = constants;

const userReducer = (state = initialState.currentUser, action) => {
  let newState;
  switch (action.type) {
    case types.NEW_USER:
      if (action.user != null) {
        return {
          ...state,
          email: action.user['email'],
          uid: action.user['uid'],
        }
      }
      else {
        return state;
      }
      default:
        return state;
      }
      console.log(newState);
  }

export default userReducer;