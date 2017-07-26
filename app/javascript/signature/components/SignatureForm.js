import React, { Component } from 'react';

export default class SignatureForm extends Component {
  render() {
    let { signature }= this.props;

    return(
      <div className='form'>
        <div className="form-group">
          <label>Name</label>
          <input type='text' name='name' value={signature.name || ""} onChange={this.props.onChangeInput}></input>
        </div>
        <div className="form-group">
          <label>Position</label>
          <input type='text' name='position' value={signature.position || ""} onChange={this.props.onChangeInput}></input>
        </div>
        <div className="form-group">
          <label>Telephone</label>
          <input type='text' name='telephone' value={signature.telephone || ""} onChange={this.props.onChangeInput}></input>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type='text' name='email' value={signature.email || ""} onChange={this.props.onChangeInput}></input>
        </div>
        <div className="form-group">
          <label>Street</label>
          <input type='text' name='street' value={signature.street || ""} onChange={this.props.onChangeInput}></input>
        </div>
        <div className="form-group">
          <label>City</label>
          <input type='text' name='city' value={signature.city || ""} onChange={this.props.onChangeInput}></input>
        </div>
        <div className="form-group">
          <label>Postcode</label>
          <input type='text' name='postcode' value={signature.postcode || ""} onChange={this.props.onChangeInput}></input>
        </div>
        <div className="form-group">
          <label>Country</label>
          <input type='text' name='country' value={signature.country || ""} onChange={this.props.onChangeInput}></input>
        </div>
        <div className="form-group">
          <label>Website</label>
          <input type='text' name='website' value={signature.website || ""} onChange={this.props.onChangeInput}></input>
        </div>
        <div className="form-group">
          <label>Banner</label>
          <input type='text' name='banner' value={signature.banner || ""} onChange={this.props.onChangeInput}></input>
        </div>
        <div className="form-group">
          <label>Banner Link</label>
          <input type='text' name='bannerLink' value={signature.bannerLink || ""} onChange={this.props.onChangeInput}></input>
        </div>
      </div>
    );
  }
}
