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

    // Estää formin default action
    submit = function (e) {
        e.preventDefault();
    }

    render() {
        const { foods, fillings, searchterm, handleAddFood } = this.props;


        return (
            <div className="searchbar">
                <form className="form-group" onSubmit={this.submit}>
                    <input className="form-control" type="text"
                        placeholder="Hae ruokia.."
                        onChange={this.props.searchHandler}
                        value={searchterm}
                    />
                    <ul className="list-group">
                        {
                            foods !== null && foods.filter(searchingFor(searchterm)).map((food, i) =>
                                <SearchItem key={i} food={food} fillings={fillings} handleAddFood={handleAddFood} />)
                        }
                    </ul>
                </form>
            </div>
        )
    }
}

export default SearchBar;
