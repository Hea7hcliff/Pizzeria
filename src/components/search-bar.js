import React, { Component } from 'react';

function searchingFor(searchterm) {
    return function (x) {
        if (searchterm !== '') {
            return x.name.toLowerCase().includes(searchterm.toLowerCase()) || !searchterm
        }
    }
}

class SearchBar extends Component {

    render() {
        const { data } = this.props;
        const searchterm = this.props.searchterm;

        const searchresult = data !== null && data.filter(searchingFor(searchterm)).map((data, i) =>
            <div key={i}>
                <span>{data.name}</span>
            </div>)

        return (
            <div className="container">
                <form>
                    <h3>Searchbar</h3>
                    <input type="text"
                        placeholder="Search..."
                        onChange={this.props.searchHandler}
                        value={searchterm}
                    />
                    {searchresult}
                </form>
            </div>
        )
    }
}

export default SearchBar;