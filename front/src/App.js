import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import ProductList from './components/product-list';
import ShoppingCart from './components/shopping-cart';
import SearchBar from './components/search-bar';
import axios from 'axios';
import { data } from './data/data';

class App extends Component {
    state = {
        food: null,
        filling: null,
        shoppingcart: [],
        searchterm: ''
    };

    // BACKEND  
    /*
    getFood() {
        axios.get('http://localhost:3000/api/Food')
            .then(response => {
                this.setState({ food: response.data }, () => {
                    // console.log(this.state);
                })
            })
    }

    getFilling() {
        axios.get('http://localhost:3000/api/Fillings/')
            .then(response => {
                this.setState({ filling: response.data }, () => {
                    // console.log(this.state);
                })
            })
    }
    
    componentWillMount() {
        this.getFood();
        this.getFilling();
    }
    */ 
    
    componentDidMount() {
        this.setState({ food: data.food })
        this.setState({ filling: data.filling })
    }

    addFood = (food) => {
        this.setState({
            shoppingcart: [...this.state.shoppingcart, food]     
        })
        console.log(food);  
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
        return (
            <div className="App">
                <div>
                    <Header />
                </div>
                <div className="container">
                    <ProductList food={this.state.food} filling={this.state.filling} addFood={this.addFood} findFilling={this.findFilling} />
                    <ShoppingCart food={this.state.shoppingcart} removeFood={this.removeFood} filling={ this.state.filling }/>
                    <SearchBar food={this.state.food} searchterm={this.state.searchterm} searchHandler={this.searchHandler} addFood={this.addFood} />
                </div>
            </div>
        );
    }
}

export default App;
