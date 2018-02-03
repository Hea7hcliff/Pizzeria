import React, { Component } from 'react';
import ShoppingItem from './shopping-item';
import axios from 'axios';

class ShoppingCart extends Component {
    handleRemoveFood = (index, food) => {
        console.log('Great success deleting', food);
        this.props.removeFood(index);
    }

    // Hakee täytteen nimen
    getFillingName = (filling, id) => {
        var f = filling.filter(f => f.id === id).map(f => f.name);
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
        const { food, filling } = this.props;
        const prices = food.map(food => food.price);
        const reducer = (total, price) => total + price;

        var info = '';
        var order_b;
        if (food.length > 0) {
            const total = prices.reduce(reducer);
            order_b = <button onClick={() => this.addOrder(food)}>Tilaa</button>
            info = "Kokonaishinta:  " + total + " €";

        } else {
            info = "Ostoskori on tyhjä";
        }

        return (
            <div className="shopping-cart">
                <h3>Ostoskori</h3>
                <ul>
                    {food.map((food, i) =>
                        <ShoppingItem i={i} key={i} food={food} filling={filling} handleRemoveFood={this.handleRemoveFood} getFillingName={this.getFillingName} />
                    )}
                </ul>
                <p>{info}</p>
                {order_b}
            </div>
        )
    }
}

export default ShoppingCart;
