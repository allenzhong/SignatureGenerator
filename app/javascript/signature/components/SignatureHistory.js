import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { newSignatureHistory, selectSignatureHistory, deleteSignatureHistory } from './actions'

class SignatureHistory extends Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onClick(e) {
    let id = e.target.dataset.id;
    let { dispatch } = this.props;
    dispatch(selectSignatureHistory(id))
  }

  onDelete(e){
    if(confirm('Are you sure to delete it?')) {
      let id = e.target.dataset.id;
      let { dispatch } = this.props;
      dispatch(deleteSignatureHistory(id))
    }
  }

  render() {
    let signatures = this.props.signatures || [];
    return (
      <div className='history'>
        <div>
          List
          <span className='newSignature'>
            <a onClick={() => this.props.dispatch(newSignatureHistory())}>
              {`\u271A New Signature` }
            </a>
          </span>
        </div>
        <ul className="links">
          { signatures.map((sig) => {
              return (<li key={sig.id}>
                        <span className='delete'>
                          <a data-id={sig.id} onClick={this.onDelete}>{'\u2716'}</a>
                        </span>
                        <a data-id={sig.id} onClick={this.onClick}>{sig.name}</a>
                        
                      </li>)
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

