import React, { Component } from 'react';
import { Route } from 'react-router';
import SignatureGenerator from './SignatureGenerator';
import { connect } from 'react-redux';

export default class SignatureMain extends Component {
  render() {
    return(
      <div className='main'>
        <SignatureGenerator />
      </div>
    );
  }
}

