import actionTypes from '../actions/actionTypes'

function statsReducer (state = {usersCount: 0, productsCount: 0}, action) {
  switch (action.type) {
    case actionTypes.FETCH_STATS_SUCCESS:
      return {
        usersCount: action.data.users,
        productsCount: action.data.products
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        usersCount: state.usersCount + 1,
        productsCount: state.productsCount
      };
    case actionTypes.CREATE_POWER_SUCCESS:
      return {
        usersCount: state.usersCount,
        productsCount: state.productsCount + 1
      };
    case actionTypes.DELETE_POWER:
      return {
        usersCount: state.usersCount,
        productsCount: state.productsCount - 1
      };
    default:
      return state
  }
}

export default statsReducer
