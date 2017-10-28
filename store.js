import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const initialState = {
  drawerOpen: false,
  cartOpen: false,
}

export const actionTypes = {
  TOGGLE_DRAWER: 'TOGGLE_DRAWER',
  TOGGLE_CART: 'TOGGLE_CART',
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_DRAWER:
      return Object.assign({}, state, {
        drawerOpen: !state.drawerOpen
      })
    case actionTypes.TOGGLE_CART:
      return Object.assign({}, state, {
        cartOpen: !state.cartOpen
      })
    default: return state
  }
}

export const toggleDrawer = (isServer) => dispatch => {
  return dispatch({ type: actionTypes.TOGGLE_DRAWER })
}

export const toggleCart = (isServer) => dispatch => {
  return dispatch({ type: actionTypes.TOGGLE_CART })
}

export const initStore = (initialState = initialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
}