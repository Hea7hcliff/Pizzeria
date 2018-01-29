import React from 'react';

const ProductItem = ({ food, handleAddFood, filling, getFillingName }) => {
    return (
        <li>
            <p>Tuote: {food.name}</p>
            <div>Täytteet: {food.filling.map((id, i) => <p key={i}>- {getFillingName(filling, id)}</p>)}</div>
            <p>Hinta: {food.price} €</p>
            <button onClick={() => handleAddFood(food)}>Lisää</button>
        </li>
    )
}

export default ProductItem;
