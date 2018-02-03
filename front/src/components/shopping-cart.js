import React, { Component } from 'react';
import ShoppingItem from './shopping-item';
import axios from 'axios';

class ShoppingCart extends Component {
    handleRemoveFood = (index, food) => {
        console.log('Great success deleting', food);
        this.props.removeFood(index);
    }

    // Hakee täytteen nimen
    getFillingName = (fillings, id) => {
        var f = fillings.filter(f => f.id === id).map(f => f.name);
        return f;
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

    render() {
        const { cartFoods, fillings } = this.props;
        const prices = cartFoods.map(food => food.price);
        const reducer = (total, price) => total + price;

        var info = '';
        var order_b;
        if (cartFoods.length > 0) {
            const total = prices.reduce(reducer);
            order_b = <button onClick={() => this.addOrder(cartFoods)}>Tilaa</button>
            info = "Kokonaishinta:  " + total + " €";

        } else {
            info = "Ostoskori on tyhjä";
        }

        return (
            <div className="shopping-cart">
                <h3>Ostoskori</h3>
                <ul>
                    {cartFoods.map((food, i) =>
                        <ShoppingItem i={i} key={i} food={food} fillings={fillings} handleRemoveFood={this.handleRemoveFood} getFillingName={this.getFillingName} />
                    )}
                </ul>
                <p>{info}</p>
                {order_b}
            </div>
        )
    }
}

export default ShoppingCart;
