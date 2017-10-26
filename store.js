import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const initialState = {
  drawerOpen: false,
}

export const actionTypes = {
  TOGGLE_DRAWER: 'TOGGLE_DRAWER',
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_DRAWER:
      return Object.assign({}, state, {
        drawerOpen: !state.drawerOpen
      })
    default: return state
  }
}

export const toggleDrawer = (isServer) => dispatch => {
  return dispatch({ type: actionTypes.TOGGLE_DRAWER })
}

export const initStore = (initialState = initialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
}