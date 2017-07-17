import React, { Component } from 'react';

export default class SignatureForm extends Component {
  render() {
    return(
      <div className='form'>
        <div className="form-group">
          <label>Name</label>
          <input type='text' name='name' onChange={this.props.onChangeInput}></input>
        </div>
        <div className="form-group">
          <label>Position</label>
          <input type='text' name='position' onChange={this.props.onChangeInput}></input>
        </div>
        <div className="form-group">
          <label>Telephone</label>
          <input type='text' name='telephone' onChange={this.props.onChangeInput}></input>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type='text' name='email' onChange={this.props.onChangeInput}></input>
        </div>
        <div className="form-group">
          <label>Street</label>
          <input type='text' name='street' onChange={this.props.onChangeInput}></input>
        </div>
        <div className="form-group">
          <label>City</label>
          <input type='text' name='city' onChange={this.props.onChangeInput}></input>
        </div>
        <div className="form-group">
          <label>Postcode</label>
          <input type='text' name='postcode' onChange={this.props.onChangeInput}></input>
        </div>
        <div className="form-group">
          <label>Country</label>
          <input type='text' name='country' onChange={this.props.onChangeInput}></input>
        </div>
        <div className="form-group">
          <label>Website</label>
          <input type='text' name='website' onChange={this.props.onChangeInput}></input>
        </div>
        <div className="form-group">
          <label>Banner</label>
          <input type='text' name='banner' onChange={this.props.onChangeInput}></input>
        </div>
        <div className="form-group">
          <label>Banner Link</label>
          <input type='text' name='bannerLink' onChange={this.props.onChangeInput}></input>
        </div>
      </div>
    );
  }
}
