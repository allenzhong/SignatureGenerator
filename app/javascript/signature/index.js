import './styles/style';
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root />,
    document.body.appendChild(document.createElement('div')),
  )
})
