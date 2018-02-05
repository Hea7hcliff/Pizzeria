import React from 'react';

const ShoppingItem = ({ food, handleRemoveFood, i, generateFillings, fillings }) => {
    return (
        <li key={i}>
            <p>Tuote: {food.name}</p>
            <ul className="inline">Täytteet: {generateFillings(food,fillings)}</ul>
            <p>Hinta: {food.price} €</p>
            <button onClick={() => handleRemoveFood(i, food)}>Poista</button>
        </li>
    )
}

export default ShoppingItem;
