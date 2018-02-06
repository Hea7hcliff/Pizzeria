import React from 'react';

const ProductItem = ({ food, fillings, handleAddFood, generateFillings }) => {
    return (
        <li className="list-group-item">
            <p>Tuote: <strong>{food.name}</strong></p>
            <ul className="inline">Täytteet: {generateFillings(food, fillings)}</ul>
            <p>Hinta: <strong>{food.price}</strong> €</p>
            <button className="btn btn-outline-success btn-sm" onClick={() => handleAddFood(food, fillings)}>Lisää</button>
        </li>
    )
}

export default ProductItem;
