import React, {Component} from 'react'

export default class MainMenu extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse bg-inverse">
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
              <a className="nav-link" href="#">Shop by Category</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Shop by Brand</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Trending</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Offers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
