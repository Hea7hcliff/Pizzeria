import React from 'react';

const SearchItem = ({ food, handleAddFood, fillings }) => {
    return (
        <li>
            <p>{food.name}<button onClick={() => handleAddFood(food, fillings)}>Lisää</button></p>
        </li>
    )
}

export default SearchItem;
