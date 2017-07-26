import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {
  REQUEST_SIGNATURE_HISTORY,
  RECEIVE_SIGNATURE_HISTORY,
  SELECT_SIGNATURE,
  UPDATE_SIGNATURE,
  NEW_SIGNATURE
} from './actions'

function signatureHistory(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_SIGNATURE_HISTORY:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_SIGNATURE_HISTORY:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.signatureHistory
      })
    case SELECT_SIGNATURE:
      let signature = state.items ? state.items.find( sig => sig.id == action.selectedSignatureId ) : {}
      return Object.assign({}, state, {
        selectedSignature: signature
      })
    case UPDATE_SIGNATURE:
      return Object.assign({}, state, {
        selectedSignature: action.selectedSignature
      })
    default:
      return state
  }
}

export const rootReducer = combineReducers({signatureHistory, routing: routerReducer})
