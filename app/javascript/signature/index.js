import './styles/style';
import React from 'react'
import ReactDOM from 'react-dom'
import SignatureGenerator from './components/SignatureGenerator';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <SignatureGenerator />,
    document.body.appendChild(document.createElement('div')),
  )
})
