import React, { Component } from 'react';
import SignatureForm from './SignatureForm';
import SignaturePanel from './SignaturePanel';

export default class SignatureGenerator extends Component {
  render() {
    return(
      <div className="container">
        <SignatureForm />
        <SignaturePanel />
      </div>
    );
  }
}
