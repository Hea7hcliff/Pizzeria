import React, { Component } from 'react';
import SearchItem from './search-item';

// Haku vertailu
function searchingFor(searchterm) {
    return function (food) {
        if (searchterm !== '') {
            return food.name.toLowerCase().includes(searchterm.toLowerCase()) || !searchterm
        }
    }
}

class SearchBar extends Component {

    // *Korjaa ja yhdistä
    handleAddFood = (food) => {
        console.log('Great success adding', food);
        this.props.addFood(food);
    }

    // Estää formin default action
    submit = function (e) {
        e.preventDefault();
    }

    render() {
        const { foods } = this.props;
        const searchterm = this.props.searchterm;

        return (
            <div className="searchbar">
                <form onSubmit={this.submit}>
                    <h3>Hakupalkki</h3>
                    <input type="text"
                        placeholder="Search..."
                        onChange={this.props.searchHandler}
                        value={searchterm}
                    />
                    <ul>
                        {
                            foods !== null && foods.filter(searchingFor(searchterm)).map((food, i) =>
                                <SearchItem key={i} food={food} handleAddFood={this.handleAddFood} />)
                        }
                    </ul>
                </form>
            </div>
        )
    }
}

export default SearchBar;