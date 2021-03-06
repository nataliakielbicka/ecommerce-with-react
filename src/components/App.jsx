import React, {Component} from "react";

import Header from "./views/Header";
import Nav from "./views/Nav";
import Main from "./views/Main";
import Footer from "./views/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Nav/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}