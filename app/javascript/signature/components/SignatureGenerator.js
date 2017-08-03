import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignatureForm from './SignatureForm';
import SignaturePanel from './SignaturePanel';
import { onChangeSignatureHistory, createSignatureHistory } from './actions';

class SignatureGenerator extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }
 
  onChangeInput(e) {
    let { dispatch }= this.props; 
    const {name, value} = e.target;
    let newSignature = Object.assign({}, this.props.signature,  {
      [name] : value,
    });
    dispatch(onChangeSignatureHistory(newSignature));
  }

  handleSubmit(e){
    e.preventDefault();
    let { dispatch, signature} = this.props;
    dispatch(createSignatureHistory(signature));
  }

  render() {
    let signature = this.props.signature ? this.props.signature : {}
    return(
      <div className="container">
        <SignatureForm signature={signature} handleSubmit={this.handleSubmit} onChangeInput={this.onChangeInput}/>
        <SignaturePanel 
          name={signature.name || ""}
          position={signature.position || ""}
          telephone={signature.telephone || ""}
          email={signature.email || ""}
          street={signature.street || ""}
          city={signature.city || ""}
          postcode={signature.postcode || ""}
          country={signature.country || ""}
          website={signature.website || ""}
          banner={signature.banner || ""}
          bannerLink={signature.banner_link || ""}
          />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { signature: state.signatureHistory.selectedSignature }
}

export default connect(mapStateToProps)(SignatureGenerator)
