import actionTypes from '../actions/actionTypes'

function ajaxStatusReducer (state = 0, action) {
  switch (action.type) {
    case actionTypes.AJAX_BEGIN:
      return state + 1;
    case actionTypes.AJAX_END:
      return state - 1;
    default:
      return state
  }
}

export default ajaxStatusReducer
