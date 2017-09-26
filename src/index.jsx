import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';

require('./stylesheets/base.scss');
require('./stylesheets/home.scss');
require('./stylesheets/contact.scss');

ReactDom.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
),
document.querySelector('#app'));