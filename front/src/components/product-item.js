import React from 'react';
// <div>Täytteet: {food.filling.map((id, i) => <p key={i}>- {getFillingName(filling, id)}</p>)}</div>

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
 