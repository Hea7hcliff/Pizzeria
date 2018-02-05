import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import ProductList from './components/product-list';
import ShoppingCart from './components/shopping-cart';
import SearchBar from './components/search-bar';
import axios from 'axios';
import uniqid from 'uniqid';

// Mock-Data
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

    handleAddFood = (food, fillings) => {
        if (food.id === "6") {
            // Uuden objektin alustaminen
            const randomFood = {
                filling: [],
                name: food.name,
                price: food.price,
                type: food.type,
                id: uniqid()
            };

            const fillingsArray = fillings.map(f => f.id);

            // Lisää 4 random täytettä
            for (let i = 0; i < 4; i++) {
                const random = Math.floor(Math.random() * fillingsArray.length) + 1;
                if (randomFood.filling.indexOf(random) > -1) continue;
                randomFood.filling.push(random);
            }
            for (let j = 0; j < randomFood.filling.length; j++) { randomFood.filling[j] = String(randomFood.filling[j]); }

            // Lisää generoidun ruuan
            console.log('Great success adding', randomFood);
            this.addFood(randomFood);
        } else {
            console.log('Great success adding', food);
            this.addFood(food);
        }
    }

    // Ruuan lisääminen ostoskoriin
    addFood = (food) => {
        this.setState({
            shoppingcart: [...this.state.shoppingcart, food]
        })
    }

    // Ruuan poistaminen ostoskoriin
    removeFood = (food) => {
        this.setState({
            shoppingcart: [...this.state.shoppingcart.slice(0, food), ...this.state.shoppingcart.slice(food + 1)]
        })
    }

    // Hakee täytteen nimen
    getFillingName = (fillings, foodFillingID) => {
        const filling = fillings.filter(filling => filling.id === foodFillingID).map(filling => filling.name);
        return filling;
    }

    // Tulostaa täytteet
    generateFillings = (food, fillings) => {
        if (food.filling.length !== 0) {
            return food.filling.map((foodFillingID, i) => <li key={i}> {this.getFillingName(fillings, foodFillingID)}</li>)
        } else {
            return <li>-Voit saada mitä vain</li>;
        }
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
                    <ProductList foods={this.state.foods} fillings={this.state.fillings} handleAddFood={this.handleAddFood} generateFillings={this.generateFillings} />
                    <SearchBar foods={this.state.foods} fillings={this.state.fillings} searchterm={this.state.searchterm} searchHandler={this.searchHandler} handleAddFood={this.handleAddFood} />
                    <ShoppingCart cartFoods={this.state.shoppingcart} fillings={this.state.fillings} generateFillings={this.generateFillings} removeFood={this.removeFood} />
                </div>
            </div>
        );
    }
}

export default App;
