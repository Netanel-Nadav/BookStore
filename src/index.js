import React from 'react';
import ReactDOM from 'react-dom';
import { RootCmp } from './RootCmp';
import { BrowserRouter as Router } from 'react-router-dom'

// Styles
import main from "./assets/styles/main.scss"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RootCmp />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)