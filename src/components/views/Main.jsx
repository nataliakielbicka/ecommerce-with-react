import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "./home/Home";
import Trending from "./trending/Trending";
import Offers from "./offers/Offers";
import Contact from "./contact/Contact";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/trending" component={Trending}/>
          <Route path="/offers" component={Offers}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    )
  }
}
