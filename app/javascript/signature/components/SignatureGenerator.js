import React, { Component } from 'react';
import SignatureForm from './SignatureForm';
import SignaturePanel from './SignaturePanel';

export default class SignatureGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      position: "",
      telephone: "",
      email: "",
      street: "9a Kirk Street, Grey Lynn",
      city: "Auckland",
      postcode: "1025",
      country: "New Zealand",
      website: "www.alliance-francaise.co.nz",
    };

    this.onChangeState = this.onChangeState.bind(this);
  }

  onChangeState(e) {
    const {name, value} = e.target;
    let newState = Object.assign({}, this.state, {
      [name] : value,
    });

    this.setState(newState);
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
          />
      </div>
    );
  }
}


