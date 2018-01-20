import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/product-list';
import { data } from './data/data';
import ShoppingCart from './components/shopping-cart';

class App extends Component {
    state = {
        data: null,
        shoppingcart: []
    };

    componentDidMount() {
        this.setState({ data: data.data });
    }

    addPizza = (pizza) => {
        // const list = [];
        // list.push(pizza);
        this.setState({
            shoppingcart: [ ...this.state.shoppingcart, pizza ]
        })
    }

    render() {
        console.log(this.state.shoppingcart);
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="container">
                    <ProductList data={this.state.data} addPizza={this.addPizza} />
                    <ShoppingCart data={this.state.shoppingcart} />
                </div>
            </div>
        );
    }
}

export default App;
