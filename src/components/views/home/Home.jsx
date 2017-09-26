import React, {Component} from 'react';
import Slider from './slider/Slider';

export default class Home extends Component {
  render() {
    return (
      <section className="home-page">
        <Slider/>
      </section>
    )
  }
}
