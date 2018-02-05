import React from 'react';

const ProductItem = ({ food, fillings, handleAddFood, generateFillings }) => {
    return (
        <li>
            <p>Tuote: {food.name}</p>
            <ul className="inline">Täytteet: {generateFillings(food, fillings)}</ul>
            <p>Hinta: {food.price} €</p>
            <button onClick={() => handleAddFood(food, fillings)}>Lisää</button>
        </li>
    )
}

export default ProductItem;
