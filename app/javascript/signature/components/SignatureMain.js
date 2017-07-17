import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignatureGenerator from './SignatureGenerator';

export default class SignatureMain extends Component {
  render() {
    return(
      <div className='main'>
        <Switch>
          <Route exact path="/signatures/create" component={SignatureGenerator} />
          <Route path="/signatures/:id" component={SignatureGenerator} />
        </Switch>
      </div>
    );
  }
}