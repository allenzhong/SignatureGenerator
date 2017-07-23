import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import SignatureApp  from './SignatureApp'
import { Router, hashHistory } from "react-router"
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createBrowserHistory } from 'history'
const store = configureStore()
const history = syncHistoryWithStore(createBrowserHistory(), store);

export default class Root extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router history={history}>
          <SignatureApp />
        </Router>
      </Provider>
    )
  }
}
