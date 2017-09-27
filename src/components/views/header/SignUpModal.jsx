import React, {Component} from 'react'

export default class SignUpModal extends Component {
    render() {
        if (!this.props.show) {
            return null;
        }
        const displayBlock = this.props.show
            ? "show d-block"
            : ""

        return (
            <div>
                <div className={`modal fade ${displayBlock}`}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">

                                <h4 className="modal-title">Modal title</h4>
                                <button
                                    type="button"
                                    className="close"
                                    aria-hidden="true"
                                    onClick={this.props.onClose}>×</button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group row">
                                        <label htmlFor="register-username" className="col-2 col-form-label">Username:</label>
                                        <div className="col-10">
                                            <input className="form-control" type="text" id="register-username"/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="register-email" className="col-2 col-form-label">Email:</label>
                                        <div className="col-10">
                                            <input className="form-control" type="email" id="register-email"/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="register-pass" className="col-2 col-form-label">Password:</label>
                                        <div className="col-10">
                                            <input className="form-control" type="password" id="register-pass"/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                    <label htmlFor="register-pass2" className="col-2 col-form-label">Repeat:</label>
                                    <div className="col-10">
                                        <input className="form-control" type="password" id="register-pass2"/>
                                    </div>
                                </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-yellow" onClick={this.props.onClose}>Cancel</button>
                                <button type="submit" className="btn btn-blue" onClick={this.props.changeBtnText}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`modal-backdrop fade ${displayBlock}`}></div>
            </div>
        )
    }
}