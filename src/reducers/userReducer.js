import constants from './../constants';
const { initialState, types } = constants;

const userReducer = (state = initialState.currentUser, action) => {
  switch (action.type) {
    case types.NEW_USER:
      console.log('reducer log:', action.user)
      if (action.user != null) {
        return {
          ...state,
          email: action.user['email'],
          uid: action.user['uid'],
          displayName: action.user['displayName']
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