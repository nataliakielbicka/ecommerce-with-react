import React, {Component} from 'react';
import MainMenu from './nav/MainMenu';
import Cart from './nav/Cart';
import SignIn from './nav/SignIn';

export default class Nav extends Component {
  render() {
    return (
      <div className="main-menu">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <MainMenu/>
            </div>
            <div className="offset-md-1 col-2">
              <Cart/>
            </div>
            <div className="col-2">
              <SignIn/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
