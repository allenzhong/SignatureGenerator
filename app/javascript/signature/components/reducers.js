import { combineReducers } from 'redux'
import {
  REQUEST_SIGNATURE_HISTORY,
  RECEIVE_SIGNATURE_HISTORY,
  SELECT_SIGNATURE,
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
    default:
      return state
  }
}

export const rootReducer = combineReducers({signatureHistory})
