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
        foods: null,
        fillings: null,
        shoppingcart: [],
        searchterm: ''
    };

    // BACKEND  
    /*
    // DB haku
    getFoods() {
        axios.get('http://localhost:3000/api/Food')
            .then(response => {
                this.setState({ foods: response.data }, () => {
                    // console.log(this.state);
                })
            })
    }

    getFillings() {
        axios.get('http://localhost:3000/api/Fillings/')
            .then(response => {
                this.setState({ fillings: response.data }, () => {
                    // console.log(this.state);
                })
            })
    }
    
    componentWillMount() {
        this.getFoods();
        this.getFillings();
    }
    */

    // Mock-data
    componentDidMount() {
        this.setState({ foods: data.food })
        this.setState({ fillings: data.filling })
    }

    // Ruuan lisääminen ostoskoriin
    addFood = (food) => {
        this.setState({
            shoppingcart: [...this.state.shoppingcart, food]
        })
        console.log(food);
    }

    // Ruuan poistaminen ostoskoriin
    removeFood = (food) => {
        this.setState({
            shoppingcart: [...this.state.shoppingcart.slice(0, food), ...this.state.shoppingcart.slice(food + 1)]
        })
    }

    // Haun hallinta
    searchHandler = (event) => {
        this.setState({ searchterm: event.target.value })
    }

    render() {
        return (
            <div className="App">
                <div className="header">
                    <Header />
                </div>
                <div className="container">
                    <ProductList foods={this.state.foods} fillings={this.state.fillings} addFood={this.addFood} />
                    <ShoppingCart cartFoods={this.state.shoppingcart} removeFood={this.removeFood} fillings={this.state.fillings} />
                    <SearchBar foods={this.state.foods} searchterm={this.state.searchterm} searchHandler={this.searchHandler} addFood={this.addFood} />
                </div>
            </div>
        );
    }
}

export default App;
