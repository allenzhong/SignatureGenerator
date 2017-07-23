import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import SignatureApp  from './SignatureApp'
import { BrowserRouter } from 'react-router-dom';

const store = configureStore()

export default class Root extends Component {
  render() {
    return(
      <Provider store={store}>
        <BrowserRouter>
          <SignatureApp />
        </BrowserRouter>
      </Provider>
    )
  }
}
