import React, { Component } from 'react';
import ProductItem from './product-item';

class ProductList extends Component {
    handleAddFood = (food, filling) => {
        if (food.id === "6") {
            // *Luo unique ID
            // Uuden objektin alustaminen
            let randomFood = {
                filling: [],
                name: food.name,
                price: food.price,
                type: food.type,
                id: 'x'
            };

            var fillingsArray = filling.map(f => f.id);

            // *Muokkaa että 4 uniikkia täytettä
            // Lisää 4 random täytettä
            for (var i = 0; i < 4; i++) {
                const newFilling = fillingsArray[Math.floor(Math.random() * fillingsArray.length)];
                randomFood.filling.push(newFilling);
            }

            // Lisää generoidun ruuan
            this.props.addFood(randomFood);
            console.log('Great success adding', randomFood);
        } else {
            console.log('Great success adding', food);
            this.props.addFood(food);
        }
    }

    // Tulostaa täytteet
    generateFillings = (food, filling) => {
        if (food.id !== "6") {
            return food.filling.map((id, i) => <p key={i}>- {this.getFillingName(filling, id)}</p>)
        } else {
            return <p>-Voit saada mitä vain</p>;
        }
    }

    // Hakee lisukkeen nimen
    getFillingName = (filling, id) => {
        var f = filling.filter(f => f.id === id).map(f => f.name);
        return f;
    }

    render() {
        const { food, filling } = this.props;
        return (
            <div className="product-list">
                <h3>Ruuat</h3>
                <ul>
                    {
                        filling !== null && food !== null && food.map((food, i) =>
                            <ProductItem key={i} food={food} generateFillings={this.generateFillings} handleAddFood={this.handleAddFood} filling={filling} />
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default ProductList;
