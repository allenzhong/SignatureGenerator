import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignatureHistory extends Component {
  render() {
    let signatures = ["Joe", "Anne"];
    return (
      <div className='history'>
        <div>
          <Link to='/signatures/create'>{`New Signature \u271A`}</Link> 
        </div>
        <ul className="links">
          { signatures.map((sig) => {
              return (<li key={sig}><Link to={`/signatures/` + sig}>{sig}</Link></li>)
          })}
        </ul>
      </div>
    );
  }
}
