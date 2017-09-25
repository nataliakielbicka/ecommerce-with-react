import React, {Component} from 'react';
import Logo from './header/Logo';
import SearchAll from './header/SearchAll';
import SignUp from './header/SignUp';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Logo/>
            </div>
            <div className="float-right col-4">
              <SearchAll/>
              <SignUp/>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
