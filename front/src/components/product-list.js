import React, { Component } from 'react';
import ProductItem from './product-item';

class ProductList extends Component {
    handleAddFood = (food, fillings) => {
        if (food.id === "6") {
            // *Luo unique ID
            // Uuden objektin alustaminen
            const randomFood = {
                filling: [],
                name: food.name,
                price: food.price,
                type: food.type,
                id: 'x'
            };

            const fillingsArray = fillings.map(f => f.id);

            // *Muokkaa että 4 uniikkia täytettä
            // Lisää 4 random täytettä
            for (var i = 0; i < 4; i++) {
                const newFilling = fillingsArray[Math.floor(Math.random() * fillingsArray.length)];
                randomFood.filling.push(newFilling);
            }

            // Lisää generoidun ruuan
            console.log('Great success adding', randomFood);
            this.props.addFood(randomFood);
        } else {
            console.log('Great success adding', food);
            this.props.addFood(food);
        }
    }

    // Tulostaa täytteet
    generateFillings = (food, fillings) => {
        if (food.id !== "6") {
            return food.filling.map((id, i) => <p key={i}>- {this.getFillingName(fillings, id)}</p>)
        } else {
            return <p>-Voit saada mitä vain</p>;
        }
    }

    // Hakee lisukkeen nimen
    getFillingName = (fillings, id) => {
        const f = fillings.filter(f => f.id === id).map(f => f.name);
        return f;
    }

    render() {
        const { foods, fillings } = this.props;
        return (
            <div className="product-list">
                <h3>Ruuat</h3>
                <ul>
                    {
                        fillings !== null && foods !== null && foods.map((food, i) =>
                            <ProductItem key={i} food={food} generateFillings={this.generateFillings} handleAddFood={this.handleAddFood} fillings={fillings} />
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default ProductList;
