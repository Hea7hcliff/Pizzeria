import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/product-list';
import { data } from './data/data';
import ShoppingCart from './components/shopping-cart';
import SearchBar from './components/search-bar';

class App extends Component {
    state = {
        data: null,
        shoppingcart: [],
        searchterm: ''
    };

    componentDidMount() {
        this.setState({ data: data.data });
    }

    addFood = (food) => {
        this.setState({
            shoppingcart: [...this.state.shoppingcart, food]
        })
    }

    removeFood = (food) => {
       this.setState({
           shoppingcart: [...this.state.shoppingcart.slice(0, food), ...this.state.shoppingcart.slice(food + 1)]
       })
    }

    searchHandler = (event) => {
        this.setState({ searchterm: event.target.value })
    }

    render() {
        // console.log(this.state.searchterm);

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="container">
                    <ProductList data={this.state.data} addFood={this.addFood} />
                    <ShoppingCart data={this.state.shoppingcart} removeFood={this.removeFood} />
                    <SearchBar data={this.state.data} searchterm={this.state.searchterm} searchHandler={this.searchHandler} addFood={this.addFood} />
                </div>
            </div>
        );
    }
}

export default App;
