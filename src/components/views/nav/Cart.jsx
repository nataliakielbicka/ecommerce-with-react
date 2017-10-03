import React, {Component} from 'react'

export default class Cart extends Component {
    render() {
        return (
            <a href="#opencart" className="btn btn-yellow"><img src="img/cart-btn-icon.png" alt="cart btn icon" className="btn-img"/>
                Cart
                <span className="cart-items">0</span>
            </a>
        )
    }
}
