import React, { Component } from 'react';
import SignatureGenerator from './SignatureGenerator';

export default class SignatureMain extends Component {
  render() {
    return(
      <div className='main'>
        <SignatureGenerator />
      </div>
    );
  }
}
