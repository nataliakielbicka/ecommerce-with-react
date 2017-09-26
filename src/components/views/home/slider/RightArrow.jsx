import React, {Component} from 'react';

export default class RightArrow extends Component {

  render() {
    return (
      <div className="next-arrow" onClick={this.props.nextSlide}>
        <img src="img/arrow-right.png" alt="arrow-right"/>
      </div>
    )
  }
}
