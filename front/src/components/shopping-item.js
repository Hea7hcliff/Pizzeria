import React from 'react';

const ShoppingItem = ({ food, handleRemoveFood, i, getFillingName, fillings }) => {
    return (
        <li key={i}>
            <p>Tuote: {food.name}</p>
            <div>Täytteet: {food.filling.map((id, i) => <p key={i}>- {getFillingName(fillings, id)}</p>)}</div>
            <p>Hinta: {food.price} €</p>
            <button onClick={() => handleRemoveFood(i, food)}>Poista</button>
        </li>
    )
}

export default ShoppingItem;
