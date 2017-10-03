import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class MainMenu extends Component {
  render() {
    return (
      <div className="col-lg-7 col-md-4 col-sm-4">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#shopbycathegory">Shop by Category</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#shopbybrand">Shop by Brand</a>
            </li>
            <li className="nav-item">
              <Link to="/trending" className="nav-link">Trending</Link>
            </li>
            <li className="nav-item">
              <Link to="/offers" className="nav-link">Offers</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
