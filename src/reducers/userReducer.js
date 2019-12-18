import constants from './../constants';
const { initialState, types } = constants;

const userReducer = (state = initialState.currentUser, action) => {
  switch (action.type) {
    case types.NEW_USER:
      if (action.currentUser != null) {
        return {
          ...state,
          email: action.currentUser['email'],
          uid: action.currentUser['uid'],
          displayName: action.currentUser['displayName']
        }
      }
      else {
        return {
          ...state,
          email: null,
          uid: null,
          displayName: null
        }
      }
      default:
        return state;
      }
  }

export default userReducer;