import React, { Component } from 'react';

export default class Slide extends Component {
  render() {
    const current = this.props.background[this.props.current];
    const styles = {
      imageBackground: {
        backgroundImage: `url(img/${current}.png)`
      }
    }
    return (
      <div className="slide" style={styles.imageBackground}></div>
    )
  }
}