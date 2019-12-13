import constants from './../constants';
const { initialState, types } = constants;

const authReducer = (state = initialState.authError, action) => {
  switch (action.type) {
    case types.LOGIN_ERROR:
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      }
    case types.LOGIN_SUCCESS:
      console.log('login success');
      return {
        authError: null
      }
    default:
      return state
  }
};

export default authReducer;