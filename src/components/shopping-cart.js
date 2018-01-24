import React, { Component } from 'react';
// import ProductItem from './search-item';

class ShoppingCart extends Component {
    handleRemoveFood = (index, food) => {
        console.log('Great success deleting', food);
        this.props.removeFood(index);
    }

    calcSum = (prices, price) => {
        prices.push(price);
        const total = prices.reduce((prices, price) => prices + price);
        return total;
    }

    render() {
        const { data } = this.props;
        const prices = [];

        return (
            <div className="shopping-cart">
                <h3>Shopping Cart</h3>

                <ul>
                    {data && data.map((food, i) =>
                        <li key={i}>
                            <p>{food.name}</p>
                            <p>{food.price} €</p>
                            <button onClick={() => this.handleRemoveFood(i, food)}>Poista</button>
                            <p>Total price: {this.calcSum(prices, food.price)} €</p>
                        </li>

                    )}


                </ul>
            </div>
        )
    }

}

export default ShoppingCart;
