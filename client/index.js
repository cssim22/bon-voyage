import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

render(
  <App />,
  document.getElementById("root")
)