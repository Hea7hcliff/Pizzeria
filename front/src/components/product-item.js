import React from 'react';

const ProductItem = ({ food, handleAddFood }) => {
    return(
        <li>
            <p>Tuote: {food.name}</p>
            <div>Täytteet: {food.filling.map(filling => <p key={filling}>-{filling}</p>) }</div>
            <p>{food.price} €</p>
            <button onClick={() => handleAddFood(food)}>Lisää</button>
        </li>
    )
}

export default ProductItem;
