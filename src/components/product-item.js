import React from 'react';

const ProductItem = ({ pizza, handleAddPizza }) => {
    return(
        <li>
            <p>{pizza.name}</p>
            <div>{pizza.filling.map(filling => <p key={filling}>{filling}</p>) }</div>
            <p>{pizza.price}</p>
            <button onClick={() => handleAddPizza(pizza)}>Lisää</button>
        </li>
    )
}

export default ProductItem;