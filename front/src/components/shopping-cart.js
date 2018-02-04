import React, { Component } from 'react';
import ShoppingItem from './shopping-item';
import axios from 'axios';

class ShoppingCart extends Component {
    handleRemoveFood = (index, food) => {
        console.log('Great success deleting', food);
        this.props.removeFood(index);
    }

    // Tilauksen hoitaminen
    addOrder = (food) => {
        const order = {
            content: [food.map(food => food.id)],
            user: "Test"
        }

        axios.request({
            method: 'post',
            url: 'http://localhost:3000/api/Orders',
            data: order
        }).then(response => {
            console.log(response.data);
        }).catch(err => console.log(err));
    }

    rounding = (value, decimals) => {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }

    render() {
        const { cartFoods, fillings, getFillingName } = this.props;
        const prices = cartFoods.map(food => food.price);
        const reducer = (total, price) => total + price;

        let info = '';
        let orderButton;
        if (cartFoods.length > 0) {
            const total = prices.reduce(reducer);
            orderButton = <button onClick={() => this.addOrder(cartFoods)}>Tilaa</button>
            info = "Kokonaishinta:  " + this.rounding(total, 2) + " €";

        } else {
            info = "Ostoskori on tyhjä";
        }

        return (
            <div className="shopping-cart">
                <h3>Ostoskori</h3>
                <ul>
                    {cartFoods.map((food, i) =>
                        <ShoppingItem i={i} key={i} food={food} fillings={fillings} handleRemoveFood={this.handleRemoveFood} getFillingName={getFillingName} />
                    )}
                </ul>
                <p>{info}</p>
                {orderButton}
            </div>
        )
    }
}

export default ShoppingCart;
