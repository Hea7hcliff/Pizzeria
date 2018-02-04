import React from 'react';

const SearchItem = ({ food, handleAddFood, fillings }) => {
    return (
        <li>
            <p>{food.name}</p>
            <button onClick={() => handleAddFood(food, fillings)}>Lisää</button>
        </li>
    )
}

export default SearchItem;
