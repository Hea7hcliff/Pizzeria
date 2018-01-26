import React from 'react';

const SearchItem = ({ food, handleAddFood }) => {
    return (
        <li>
            <p>{food.name}</p>
            <button onClick={() => handleAddFood(food)}>Lisää</button>
        </li>
    )

}

export default SearchItem;