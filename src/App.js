import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import ProductList from './components/product-list';
import ShoppingCart from './components/shopping-cart';
import SearchBar from './components/search-bar';

import { data } from './data/data';

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
                <div>
                    <Header />
                </div>
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
