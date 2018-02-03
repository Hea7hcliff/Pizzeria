import React from 'react';

const ShoppingItem = ({ food, handleRemoveFood, i, getFillingName, fillings }) => {
    return (
        <li key={i}>
            <p>Tuote: {food.name}</p>
            <p>{food.price} €</p> 
            {console.log("Food's filling: " + food.filling)}

            <div>Täytteet: {food.filling.map((id, i) => <p key={i}>- {getFillingName(fillings, id)}</p>)}</div>
            {console.log("Food's filling: " + food.filling)}
            <button onClick={() => handleRemoveFood(i, food)}>Poista</button>
        </li>
    )
}

export default ShoppingItem;
