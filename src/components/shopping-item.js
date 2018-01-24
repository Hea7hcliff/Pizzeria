import React from 'react';

const ShoppingItem = ({ food, handleRemoveFood, i }) => {
    return (
        <li key={i}>
            <p>{food.name}</p>
            <p>{food.price} €</p>
            <button onClick={() => handleRemoveFood(i, food)}>Poista</button>
        </li>
    )
}

export default ShoppingItem;
