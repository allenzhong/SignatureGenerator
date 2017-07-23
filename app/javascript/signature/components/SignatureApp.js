import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignatureHistory from './SignatureHistory';
import SignatureMain from './SignatureMain';
import {
  requestSignatureHistory,
  receiveSignatureHistory,
  fetchSignatureHisotryIfNeeded
} from './actions'

class SignatureApp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props)
    const {dispatch} = this.props
    dispatch(fetchSignatureHisotryIfNeeded())
  }

  render() {
    return (
      <div className='app'>
        <SignatureHistory signatures={this.props.signatures}/>
        <SignatureMain />        
      </div>
    )
  }
}

SignatureApp.propTypes = {
  signatures: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  console.log(state)
  return { signatures: state.signatureHistory.items }
}

export default connect(mapStateToProps)(SignatureApp)

