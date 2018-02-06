import React, { Component } from 'react';
import ShoppingItem from './shopping-item';
import axios from 'axios';

class ShoppingCart extends Component {
    handleRemoveFood = (index, food) => {
        console.log('Great success deleting', food);
        this.props.removeFood(index);
    }

    // Tilauksen hoitaminen
    addOrder = (cartFoods, totalPrice) => {
        const order = {
            content: [cartFoods.map(food => food.id)],
            user: "Test",
            price: totalPrice
        }

        axios.request({
            method: 'post',
            url: 'http://localhost:3000/api/Orders',
            data: order
        }).then(response => {
            console.log("Great success ordering: ", response.data);
        }).catch(err => console.log(err));
    }

    rounding = (value, decimals) => {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }

    render() {
        const { cartFoods, fillings, generateFillings } = this.props;
        const prices = cartFoods.map(food => food.price);
        const reducer = (total, price) => total + price;

        let info = '';
        let orderButton;
        if (cartFoods.length > 0) {
            let total = prices.reduce(reducer);
            total = this.rounding(total, 2)
            orderButton = <button className="btn btn-outline-info btn-sm" onClick={() => this.addOrder(cartFoods, total)}>Tilaa</button>
            info = "Kokonaishinta:  " + total + " €";
        } else {
            info = "Ostoskori on tyhjä";
        }

        return (
            <div className="shoppingcart">
                <h3>Ostoskori</h3>
                <ul className="list-group">
                    {cartFoods.map((food, i) =>
                        <ShoppingItem i={i} key={i} food={food} fillings={fillings} handleRemoveFood={this.handleRemoveFood} generateFillings={generateFillings} />
                    )}
                </ul>
                <h4>{info}</h4>
                {orderButton}
            </div>
        )
    }
}

export default ShoppingCart;
