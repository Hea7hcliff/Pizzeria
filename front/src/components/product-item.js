import React from 'react';

const ProductItem = ({ food, handleAddFood, fillings, generateFillings }) => {
    return (
        <li>
            <p>Tuote: {food.name}</p>
            <div>Täytteet: {generateFillings(food, fillings)}</div>
            <p>Hinta: {food.price} €</p>
            <button onClick={() => handleAddFood(food, fillings)}>Lisää</button>
        </li>
    )
}

export default ProductItem;
 