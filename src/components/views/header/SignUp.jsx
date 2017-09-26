import React, {Component} from 'react';
import SignUpModal from './SignUpModal';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleModal = this
      .toggleModal
      .bind(this);
  }
  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <button className="btn btn-blue float-right" onClick={this.toggleModal}>Sign Up</button>
        <SignUpModal show={this.state.isOpen} onClose={this.toggleModal}/>
      </div>
    )
  }
}
