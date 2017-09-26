import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Logo extends Component {
  render() {
    return (
      <Link to="/" className="navbar-brand"><img src="img/logo.png" alt="ecommerce main logo" className="logo"/></Link>
    )
  }
}