// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import "../node_modules/material-design-lite/material.min.js";
import "../node_modules/aos/dist/aos.js";
import "https://code.jquery.com/jquery-3.2.1.min.js";

ReactDOM.render(
  <App/>, document.getElementById('react-root'));
