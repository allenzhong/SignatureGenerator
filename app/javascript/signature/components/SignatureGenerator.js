import React, { Component } from 'react';
import SignatureForm from './SignatureForm';
import SignaturePanel from './SignaturePanel';

export default class SignatureGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = this.defaultState(); 

    this.onChangeState = this.onChangeState.bind(this);
  }

  onChangeState(e) {
    const {name, value} = e.target;
    let newState = Object.assign({}, this.state, {
      [name] : value,
    });

    this.setState(newState);
  }
  
  defaultState() {
    return {
      name: "José-Marie CORTÈS",
      position: "Director - Representative                      of the Fondation Alliance Française   in New Zealand & Cook Islands",
      telephone: "+64(09)-376 00009",
      email: "director@alliance-francaise.co.nz",
      street: "9a Kirk Street, Grey Lynn",
      city: "Auckland",
      postcode: "1025",
      country: "New Zealand",
      website: "www.alliance-francaise.co.nz",
      banner: "https://alliance-francaise.sslsvc.com/media/website_posts/736/winter-intensive-beginners-website-banner2.png",
      bannerLink: "http://www.alliance-francaise.co.nz/learn-french/intensive-immersion/?age_group_id=1&location_id=1&session_id=77&type_id=8&clicked_link=1&level_id=102"
    }; 
  }

  render() {
    return(
      <div className="container">
        <SignatureForm onChangeInput={this.onChangeState}/>
        <SignaturePanel 
          name={this.state.name}
          position={this.state.position}
          telephone={this.state.telephone}
          email={this.state.email}
          street={this.state.street}
          city={this.state.city}
          postcode={this.state.postcode}
          country={this.state.country}
          website={this.state.website}
          banner={this.state.banner}
          bannerLink={this.bannerLink}
          />
      </div>
    );
  }
}


