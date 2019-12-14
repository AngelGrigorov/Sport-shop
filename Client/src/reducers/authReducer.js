import actionTypes from '../actions/actionTypes'

function registerReducer (state = {success: false}, action) {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
      return Object.assign({}, state, {success: true});
    case actionTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {success: false});
    case actionTypes.REDIRECTED:
      return Object.assign({}, state, {success: false});
    default:
      return state
  }
}

function loginReducer (state = {success: false}, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {success: true});
    case actionTypes.REDIRECTED:
      return Object.assign({}, state, {success: false});
    case actionTypes.LOGOUT_SUCCESS:
      return Object.assign({}, state, {success: false});
    default:
      return state
  }
}

function registerErrorReducer (state = {hasError: false, message: ''}, action) {
  switch (action.type) {
    case actionTypes.REGISTER_ERROR:
      return Object.assign({}, state, {hasError: true, message: action.error});
    case actionTypes.REGISTER_SUCCESS:
      return Object.assign({}, state, {hasError: false, message: ''});
    default:
      return state
  }
}

function loginErrorReducer (state = {hasError: false, message: ''}, action) {
  switch (action.type) {
    case actionTypes.LOGIN_ERROR:
      return Object.assign({}, state, {hasError: true, message: action.error});
    case actionTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {hasError: false, message: ''});
    default:
      return state
  }
}

export {
  registerReducer,
  loginReducer,
  registerErrorReducer,
  loginErrorReducer
}
