import React, { Component } from 'react';
import MainMenu from './nav/MainMenu';
import Cart from './nav/Cart';
import SignIn from './nav/SignIn';

export default class Nav extends Component {
  render() {
    return (
      <div className="main-nav">
        <MainMenu />
        <Cart />
        <SignIn />
      </div>
    )
  }
}
