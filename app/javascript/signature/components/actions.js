import fetch from 'isomorphic-fetch'

export const REQUEST_SIGNATURE_HISTORY = 'REQUEST_SIGNATURE_HISTORY';
export const RECEIVE_SIGNATURE_HISTORY = 'RECEIVE_SIGNATURE_HISTORY';
export const SELECT_SIGNATURE = 'SELECT_SIGNATURE';
export const NEW_SIGNATURE = 'NEW_SIGNATURE';
export const UPDATE_SIGNATURE = 'UPDATE_SIGNATURE'
const requstSignatureHistoryURL = '/signatures.json'

export function requestSignatureHistory(){
  return {
    type: REQUEST_SIGNATURE_HISTORY
  }
}

export function receiveSignatureHistory(signatureHistory){
  return{
    type: RECEIVE_SIGNATURE_HISTORY,
    signatureHistory
  }
}

export function selectSignatureHistory(selectedSignatureId){
  return{
    type: SELECT_SIGNATURE,
    selectedSignatureId: selectedSignatureId
  }
}

export function updateSignatureHistory(selectedSignature){
  return{
    type: UPDATE_SIGNATURE,
    selectedSignature: selectedSignature
  }
}

export function fetchSignatureHisotryIfNeeded(){
  return (dispatch, getState) => {
    return dispatch(fetchSignatureHistory())
  }
}

function fetchSignatureHistory(){
  return dispatch => {
    dispatch(requestSignatureHistory())
    return fetch(requstSignatureHistoryURL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      return response.json()
    })
    .then(json => {
      console.log(json);
      dispatch(receiveSignatureHistory(json))
    })
  }
}
