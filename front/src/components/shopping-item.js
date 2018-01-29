import React from 'react';

/*<div>Täytteet: {food.filling.map(filling => <p key={filling}>-{filling}</p>)}</div>*/

const ShoppingItem = ({ food, handleRemoveFood, i }) => {
    return (
        <li key={i}>
            <p>Tuote: {food.name}</p>
            <p>{food.price} €</p>
            <button onClick={() => handleRemoveFood(i, food)}>Poista</button>
        </li>
    )
}

export default ShoppingItem;
