import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignatureForm from './SignatureForm';
import SignaturePanel from './SignaturePanel';
import { updateSignatureHistory } from './actions';

class SignatureGenerator extends Component {
  constructor(props) {
    super(props);
    this.onChangeInput = this.onChangeInput.bind(this);
  }
 
  onChangeInput(e) {
    let { dispatch }= this.props; 
    const {name, value} = e.target;
    let newSignature = Object.assign({}, this.props.signature,  {
      [name] : value,
    });
    dispatch(updateSignatureHistory(newSignature));
  }

  render() {
    let signature = this.props.signature ? this.props.signature : {}
    return(
      <div className="container">
        <SignatureForm signature={signature} onChangeInput={this.onChangeInput}/>
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
          bannerLink={signature.bannerLink || ""}
          />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { signature: state.signatureHistory.selectedSignature }
}

export default connect(mapStateToProps)(SignatureGenerator)





