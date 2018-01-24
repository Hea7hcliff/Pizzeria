import React, { Component } from 'react';
import ShoppingItem from './shopping-item';

class ShoppingCart extends Component {
    handleRemoveFood = (index, food) => {
        console.log('Great success deleting', food);
        this.props.removeFood(index);
    }
 
    
    /*calcSum = (prices, price) => {
        prices.push(price);
        const total = prices.reduce((prices, price) => prices + price);
        return total;
    }*/


    render() {
        const { data } = this.props;
        // const prices = [];

        return (
            <div className="shopping-cart">
                <h3>Shopping Cart</h3>

                <ul>
                    {data.map((food, i) =>
                        <ShoppingItem i={i} key={i} food={food} handleRemoveFood={this.handleRemoveFood} />
                    )}
                </ul>
                    <p>Total price: {/*this.calcSum(prices, ?data.price?)*/} €</p>
            </div>
        )
    }
}

export default ShoppingCart;
