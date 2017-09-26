import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Header from "./views/Header";
import Nav from "./views/Nav";
import Home from "./views/Home";
import Footer from "./views/Footer";

import Trending from "./views/trending/Trending";
import Offers from "./views/offers/Offers";
import Contact from "./views/contact/Contact";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Nav/>
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
          <Router>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Shop by Category</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Shop by Brand</a>
                </li>
                <li className="nav-item">
                  <Link to="/trending">Trending</Link>
                </li>
                <li className="nav-item">
                  <Link to="/offers">Offers</Link>
                </li>
                <li className="nav-item">
                <Link to="/contact">Contact us</Link>
                </li>
              </ul>
              <Route exact path="/" component={Home}/>
              <Route path="/trending" component={Trending}/>
              <Route path="/offers" component={Offers}/>
              <Route path="/contact" component={Contact}/>
            </div>

          </Router>

        </nav>

        <Footer/>
      </div>
    );
  }
}