import constants from './../constants';
const { initialState, types } = constants;

const userReducer = (state = initialState, action) => {
  let newState;
  let userInfo;
  switch (action.type) {
    case types.NEW_USER:
      if (action.user != null) {
        userInfo = {
          email: action.user['email'],
          uid: action.user['uid']
        }
        newState = Object.assign({}, state, { ...userInfo });
      }
      else {
        userInfo = {
          email: null,
          uid: null
        }
        newState = Object.assign({}, state, { ...userInfo });
      }
      console.log(newState);
      return newState;
    default:
      return state;
  }
}

export default userReducer;