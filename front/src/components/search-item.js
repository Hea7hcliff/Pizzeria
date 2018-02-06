import React from 'react';

const SearchItem = ({ food, handleAddFood, fillings }) => {
    return (
        <li className="list-group-item">
            <p>{food.name}<button className="btn btn-outline-success btn-sm" onClick={() => handleAddFood(food, fillings)}>Lisää</button></p>
        </li>
    )
}

export default SearchItem;
