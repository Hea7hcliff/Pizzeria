import React, { Component } from 'react';
import SearchItem from './search-item';

function searchingFor(searchterm) {
    return function (food) {
        if (searchterm !== '') {
            return food.name.toLowerCase().includes(searchterm.toLowerCase()) || !searchterm
        }
    }
}

class SearchBar extends Component {
    handleAddFood = (food) => {
        console.log('Great success adding', food);
        this.props.addFood(food);
    }

    submit = function (e) {
        e.preventDefault();
    }

    render() {
        const { data } = this.props;
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
                            data !== null && data.filter(searchingFor(searchterm)).map((food, i) =>
                                <SearchItem key={i} food={food} handleAddFood={this.handleAddFood} />)
                        }
                    </ul>
                </form>
            </div>
        )
    }
}

export default SearchBar;