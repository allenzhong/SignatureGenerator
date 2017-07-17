import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignatureHistory from './SignatureHistory';
import SignatureMain from './SignatureMain';

export default class SignatureApp extends Component {
  render() {
    return (
      <div className='app'>
        <SignatureHistory />
        <SignatureMain />        
      </div>
    );
  }
}