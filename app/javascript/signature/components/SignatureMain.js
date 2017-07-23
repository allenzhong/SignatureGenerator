import React, { Component } from 'react';
import { Route } from 'react-router';
import SignatureGenerator from './SignatureGenerator';

export default class SignatureMain extends Component {
  render() {
    return(
      <div className='main'>
        <Route exact path="/signatures/create" component={SignatureGenerator} />
        <Route path="/signatures/:id" component={SignatureGenerator} />
      </div>
    );
  }
}
