import React from 'react';

const ShoppingItem = ({ food, handleRemoveFood, i, getFillingName, filling }) => {
    return (
        <li key={i}>
            <p>Tuote: {food.name}</p>
            <p>{food.price} €</p>
            <div>Täytteet: {food.filling.map((id, i) => <p key={i}>- {getFillingName(filling, id)}</p>)}</div>
            <button onClick={() => handleRemoveFood(i, food)}>Poista</button>
        </li>
    )
}

export default ShoppingItem;
