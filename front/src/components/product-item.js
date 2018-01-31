import React from 'react';

const ProductItem = ({ food, handleAddFood, filling, generateFillings }) => {
    return (
        <li>
            <p>Tuote: {food.name}</p>
            <div>Täytteet: {generateFillings(food, filling)}</div>
            <p>Hinta: {food.price} €</p>
            <button onClick={() => handleAddFood(food, filling)}>Lisää</button>
        </li>
    )
}

export default ProductItem;
 