import React, {Component} from 'react';
import axios from 'axios';
import Slide from './Slide';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import './slider.css';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background: [],
      current: undefined,
      ready: false
    }
    this.previousSlide = this
      .previousSlide
      .bind(this);
    this.nextSlide = this
      .nextSlide
      .bind(this);
    this.preloadNextImage = this
      .preloadNextImage
      .bind(this);
  }

  // Pulls in config data for the slider from .json file
  componentWillMount() {
    axios
      .get('slider-config.json')
      .then((res) => {
        this.setImageArray(res.data);
        //console.log(res.data)
      });
  }

  // Sets the background state property to the array of images pulled in from the
  // componentWillMount method
  setImageArray(imageArray) {
    let newArray = [];
    for (let i = 0; i < imageArray.length; i++) {
      newArray.push(imageArray[i].image);
    }
    this.setState({background: newArray, current: 0, ready: true});
  }

  preloadNextImage() {
    let current = this.state.current;
    let background = this.state.background;

    if ((current != undefined) && (current < background.length - 1)) 
      return (
        <div
          style={{
          display: 'none',
          height: '100%',
          backgroundImage: `url(img/${ (this.state.background[this.state.current + 1])}.png)`
        }}></div>
      )
    else 
      return null
  }

  /* Previous & Next Slide Functionality */
  previousSlide() {
    let current = this.state.current;
    let imageArray = this.state.background.length - 1;

    if (current >= 1) 
      this.setState({
        current: current - 1
      })
    if (current === 0) 
      this.setState({current: imageArray})
  }

  nextSlide() {
    let current = this.state.current;
    let imageArray = this.state.background.length - 1;

    if ((current >= 0) && (current !== imageArray)) 
      this.setState({
        current: current + 1
      })
    if (current === imageArray) {
      this.setState({current: 0})
    }
  }

  render() {
    return (
      <div className="slider">
        {/* The Current Image*/}
        {this.state.ready
          ? <Slide
              background={this.state.background}
              current={this.state.current}
              ready={this.state.ready}/>
          : null
}

        {/* Arrows */}
        <LeftArrow previousSlide={this.previousSlide}/>
        <RightArrow nextSlide={this.nextSlide}/> {this.preloadNextImage()}
      </div>
    );
  }
}
