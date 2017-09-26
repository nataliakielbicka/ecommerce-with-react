import React, {Component} from 'react';

export default class LeftArrow extends Component {
  render() {
    return (
      <div className="back-arrow" onClick={this.props.previousSlide}>
        <img src="img/arrow-left.png" alt="arrow-left"/>
      </div>
    )
  }
}
