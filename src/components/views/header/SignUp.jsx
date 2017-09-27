import React, {Component} from 'react';
import SignUpModal from './SignUpModal';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      signUpBtnText: true
    };
    this.toggleModal = this
      .toggleModal
      .bind(this);
    this.changeBtnText = this
      .changeBtnText
      .bind(this);
  }
  changeBtnText() {
    this.setState({
      signUpBtnText: false,
      isOpen: false
    });
  }
  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <button className="btn btn-blue float-right" onClick={this.toggleModal} disabled={!this.state.signUpBtnText}>{this.state.signUpBtnText
            ? "Sign Up"
            : "Registered!"}</button>
        <SignUpModal show={this.state.isOpen} onClose={this.toggleModal} changeBtnText={this.changeBtnText}/>
      </div>
    )
  }
}
