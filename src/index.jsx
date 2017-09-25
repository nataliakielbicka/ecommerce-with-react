import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App'

require('./stylesheets/base.scss');
require('./stylesheets/home.scss');
require('./stylesheets/contact.scss');

ReactDom.render(
  <App />,
  document.querySelector('#app')
);