import React, {Component} from 'react';
import Logo from './header/Logo';
import SearchAll from './header/SearchAll';
import SignUp from './header/SignUp';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Logo/>
        <div className="header-right">
          <SearchAll/>
          <SignUp/>
        </div>
      </div>
    )
  }
}
