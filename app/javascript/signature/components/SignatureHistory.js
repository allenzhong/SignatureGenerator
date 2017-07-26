import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectSignatureHistory } from './actions'

class SignatureHistory extends Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    let id = e.target.dataset.id;
    let { dispatch } = this.props
    dispatch(selectSignatureHistory(id))
  }

  render() {
    let signatures = this.props.signatures || [];
    return (
      <div className='history'>
        <div>
          <Link to='/signatures/create'>{`New Signature \u271A`}</Link> 
        </div>
        <ul className="links">
          { signatures.map((sig) => {
              return (<li key={sig.id}><a data-id={sig.id} onClick={this.onClick}>{sig.name}</a></li>)
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { signatures: state.signatureHistory.items }
}

export default connect(mapStateToProps)(SignatureHistory)

