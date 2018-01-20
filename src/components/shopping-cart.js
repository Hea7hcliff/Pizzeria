import React, { Component } from 'react';

class ShoppingCart extends Component {


    render() {
        const { data } = this.props;
        return(
            <div className="shopping-cart">
                <h3>Ostoskori</h3>
                <ul>
                   { data && data.map((pizza, i) => <li key={i}>{pizza.name}</li>)}
                </ul>
            </div>
        )
    }

}

export default ShoppingCart;
