import React, { Component } from 'react';
import ShoppingItem from './shopping-item';

class ShoppingCart extends Component {
    handleRemoveFood = (index, food) => {
        console.log('Great success deleting', food);
        this.props.removeFood(index);
    }

    render() {
        const { data } = this.props;
        const prices = data.map(food => food.price);
        const reducer = (total, price) => total + price;
        var msg = '';

        if (data.length > 0) {
            const total = prices.reduce(reducer);
            msg = "Kokonaishinta:  "  + total + " €";
        } else {
            msg = "Ostoskori on tyhjä";
        }


        return (
            <div className="shopping-cart">
                <h3>Ostoskori</h3>
                <ul>
                    {data.map((food, i) =>
                        <ShoppingItem i={i} key={i} food={food} handleRemoveFood={this.handleRemoveFood} />
                    )}
                </ul>
                <p>{msg}</p>
            </div>
        )
    }
}

export default ShoppingCart;
