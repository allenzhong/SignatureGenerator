import React, { Component } from 'react';

export default class SignatureForm extends Component {
  render() {
    return(
      <div className='form'>
        <div className="form-group">
          <label>Name</label>
          <input type='text' name='name'></input>
        </div>
        <div className="form-group">
          <label>Position</label>
          <input type='text' name='position'></input>
        </div>
        <div className="form-group">
          <label>Telephone</label>
          <input type='text' name='telephone'></input>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type='text' name='email'></input>
        </div>
        <div className="form-group">
          <label>Street</label>
          <input type='text' name='street'></input>
        </div>
        <div className="form-group">
          <label>City</label>
          <input type='text' name='city'></input>
        </div>
        <div className="form-group">
          <label>Postcode</label>
          <input type='text' name='postcode'></input>
        </div>
        <div className="form-group">
          <label>Country</label>
          <input type='text' name='country'></input>
        </div>
        <div className="form-group">
          <label>website</label>
          <input type='text' name='website'></input>
        </div>
      </div>
    );
  }
}
