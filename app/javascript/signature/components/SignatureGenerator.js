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

  // defaultProps() {
  //   return {
  //     name: "José-Marie CORTÈS",
  //     position: "Director - Representative                      of the Fondation Alliance Française   in New Zealand & Cook Islands",
  //     telephone: "+64(09)-376 00009",
  //     email: "director@alliance-francaise.co.nz",
  //     street: "9a Kirk Street, Grey Lynn",
  //     city: "Auckland",
  //     postcode: "1025",
  //     country: "New Zealand",
  //     website: "www.alliance-francaise.co.nz",
  //     banner: "https://alliance-francaise.sslsvc.com/media/website_posts/736/winter-intensive-beginners-website-banner2.png",
  //     bannerLink: "http://www.alliance-francaise.co.nz/learn-french/intensive-immersion/?age_group_id=1&location_id=1&session_id=77&type_id=8&clicked_link=1&level_id=102"
  //   }; 
  // } 

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





