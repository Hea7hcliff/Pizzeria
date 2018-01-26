import React from 'react';

const ShoppingItem = ({ food, handleRemoveFood, i }) => {
    return (
        <li key={i}>
            <p>Tuote: {food.name}</p>
            <div>Täytteet: {food.filling.map(filling => <p key={filling}>-{filling}</p>) }</div>
            <p>{food.price} €</p>
            <button onClick={() => handleRemoveFood(i, food)}>Poista</button>
        </li>
    )
}

export default ShoppingItem;
