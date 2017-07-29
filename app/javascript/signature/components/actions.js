import fetch from 'isomorphic-fetch'

export const REQUEST_SIGNATURE_HISTORY = 'REQUEST_SIGNATURE_HISTORY';
export const RECEIVE_SIGNATURE_HISTORY = 'RECEIVE_SIGNATURE_HISTORY';
export const SELECT_SIGNATURE = 'SELECT_SIGNATURE';
export const NEW_SIGNATURE = 'NEW_SIGNATURE';
export const CREATE_SIGNATURE = 'CREATE_SIGNATURE';
export const ON_CHANGE_SIGNATURE = 'ON_CHANGE_SIGNATURE';
export const SAVED_SIGNATURE = 'SAVED_SIGNATURE';
const requstSignatureHistoryURL = '/signatures.json';
const requstCreateSignatureHistoryURL = '/signatures.json';
const requestUpdateSignatureHistoryURL = '/signatures/';
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

export function createSignatureHistory(newSignature){
  return (dispatch, getState) => {
    return dispatch(requestCreateSignatureHistry(newSignature));
  }
}

function requestCreateSignatureHistry(newSignature){
  const token = document.querySelectorAll('meta[name="csrf-token"]')[0].content;
  let method = newSignature.id ? "PATCH" : "POST";
  let url = newSignature.id ? `${requestUpdateSignatureHistoryURL}/${newSignature.id}` : requestCreateSignatureHistry;
  return dispatch => {
    return fetch(url, {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token
      },
      body: JSON.stringify(newSignature),
      credentials: 'same-origin'
    })
    .then(response => {
      console.log(response);
      dispatch(savedSignatureHistory());
      return response.statue;
    })
    .then(statue => {
      dispatch(fetchSignatureHisotryIfNeeded());
    })
  }
}

export function savedSignatureHistory(){
  return{ 
    type: SAVED_SIGNATURE
  }
}


export function onChangeSignatureHistory(selectedSignature){
  return{
    type: ON_CHANGE_SIGNATURE,
    selectedSignature: selectedSignature
  }
}

export function fetchSignatureHisotryIfNeeded(){
  return (dispatch, getState) => {
    return dispatch(fetchSignatureHistory());
  }
}

function fetchSignatureHistory(){
  return dispatch => {
    dispatch(requestSignatureHistory());
    return fetch(requstSignatureHistoryURL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      return response.json();
    })
    .then(json => {
      console.log(json);
      dispatch(receiveSignatureHistory(json));
    })
  }
}

