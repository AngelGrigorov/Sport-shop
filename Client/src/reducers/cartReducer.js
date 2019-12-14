import actionTypes from '../actions/actionTypes'

function cartReducer (state = [], action) {

  switch (action.type) {

    case actionTypes.ADD_TO_CART:
      let product = state.find(p => p.id === action.id);
      if (product) {
        return state
      }
      let newState = state.slice();
      newState.push({id: action.id, quantity: 1});
      return newState;

    case actionTypes.SYNC_CART:
      product = state.find(p => p.id === action.id);
      if (product.quantity === action.quantity) {
        return state
      }
      newState = state.slice();
      newState.find(p => p.id === action.id).quantity = action.quantity;
      return newState;

    case actionTypes.REMOVE_FROM_CART:
      newState = [];
      for (const product of state) {
        if (product.id !== action.id) {
          newState.push(product)
        }
      }
      return newState;

    case actionTypes.SUBMIT_ORDER:
      return [];

    default:
      return state
  }
}

export default cartReducer
