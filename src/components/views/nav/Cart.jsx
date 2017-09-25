import React, {Component} from 'react'

export default class Cart extends Component {
    render() {
        return (
            <button className="btn btn-primary">Cart <span className="cart__items">0</span></button>
        )
    }
}
