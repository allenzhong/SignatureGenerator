import fetch from 'isomorphic-fetch'

export const REQUEST_SIGNATURE_HISTORY = 'REQUEST_SIGNATURE_HISTORY';
export const RECEIVE_SIGNATURE_HISTORY = 'RECEIVE_SIGNATURE_HISTORY';
export const SELECT_SIGNATURE = 'SELECT_SIGNATURE';
export const NEW_SIGNATURE = 'NEW_SIGNATURE';
const requstSignatureHistoryURL = 'http://localhost:5000/signatures.json'

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
