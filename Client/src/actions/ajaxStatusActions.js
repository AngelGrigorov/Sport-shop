import actionTypes from './actionTypes'

function beginAjax () {
  return {
    type: actionTypes.AJAX_BEGIN
  }
}

function endAjax () {
  return {
    type: actionTypes.AJAX_END
  }
}

export {
  beginAjax,
  endAjax
}
