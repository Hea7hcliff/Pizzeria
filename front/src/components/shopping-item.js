import React from 'react';

const ShoppingItem = ({ food, handleRemoveFood, i, generateFillings, fillings }) => {
    return (
        <li className="list-group-item" key={i}>
            <p>Tuote: <strong>{food.name}</strong></p>
            <ul className="inline">Täytteet: {generateFillings(food,fillings)}</ul>
            <p>Hinta: <strong>{food.price}</strong> €</p>
            <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemoveFood(i, food)}>Poista</button>
        </li>
    )
}

export default ShoppingItem;
