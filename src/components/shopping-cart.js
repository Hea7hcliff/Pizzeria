import React, { Component } from 'react';

class ShoppingCart extends Component {
    handleRemovePizza = (index, pizza) => {
        console.log('Great success deleting', pizza);
        this.props.removePizza(index);
    }

    render() {
        const { data } = this.props;
        return (
            <div className="shopping-cart">
                <h3>Ostoskori</h3>
                <ul>
                    {data && data.map((pizza, i) =>
                    <li key={i}>{pizza.name}
                    <button onClick={() => this.handleRemovePizza(i, pizza)}>Poista</button>
                    </li>)}    
                </ul>
            </div>
        )
    }

}

export default ShoppingCart;
