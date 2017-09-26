import React, {Component} from 'react';
import MainMenu from './nav/MainMenu';
import Cart from './nav/Cart';
import SignIn from './nav/SignIn';

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="row no-gutters">
            <MainMenu/>
            <div className="col-lg-5 col-md-8 col-sm-8">
              <Cart/>
              <SignIn/>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
