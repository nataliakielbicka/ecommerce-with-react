import React, { Component } from 'react';
import Slider from './home/slider/Slider';

export default class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <h1>this is home</h1>
        <Slider />
      </div>
    )
  }
}
