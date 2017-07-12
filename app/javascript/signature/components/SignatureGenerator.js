import React, { Component } from 'react';

export default class SignatureGenerator extends Component {
  render() {
    return(
      <div className="container">
        <div className='form'>
          <div className="form-group">
            <label>Name</label>
            <input type='text' name='name'></input>
          </div>
        </div>
        <div className='content'>here</div>
      </div>
    );
  }
}
