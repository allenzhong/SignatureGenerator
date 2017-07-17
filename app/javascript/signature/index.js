import './styles/style';
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import SignatureApp from './components/SignatureApp';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render((
    <BrowserRouter>
      <SignatureApp />
    </BrowserRouter>),
    document.body.appendChild(document.createElement('div')),
  )
})
