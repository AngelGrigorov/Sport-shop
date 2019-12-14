import actionTypes from './actionTypes'

function addToCartAction (id) {
  return {
    type: actionTypes.ADD_TO_CART,
    id
  }
}

function removeFromCartAction (id) {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    id
  }
}

function syncCartAction (id, quantity) {
  return {
    type: actionTypes.SYNC_CART,
    id,
    quantity
  }
}

export {
  addToCartAction,
  syncCartAction,
  removeFromCartAction
}
