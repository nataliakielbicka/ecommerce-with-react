import React, {Component} from 'react';
import Logo from './header/Logo';
import SearchAll from './header/SearchAll';
import SignUp from './header/SignUp';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-7 col-md-4 col-sm-4">
              <Logo/>
            </div>
            <div className="col-lg-5 col-md-8 col-sm-8 form-wrapper">
              <SearchAll/>
              <SignUp/>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
