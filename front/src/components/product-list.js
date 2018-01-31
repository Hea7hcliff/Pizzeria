import React, { Component } from 'react';
import ProductItem from './product-item';

class ProductList extends Component {
    handleAddFood = (food, filling) => {

        // ISSUE 
        // Pomon surprise! eli random täytteitä
        // Mitä pitää ratkaista? :
        // - Kuinka saa pomon pizzan uniikkina ostoskoriin random täytteillä
        // - Pomon pizza id backendissä = 5a6efadef0371f11d8e87389, mock = 6
        
        if (food.id === "6") {
            if (food.filling[0] === "") {
                food.filling = [];
            }

            var array = filling.map(f => f.id);
            for (var i = 0; i < 4; i++) { food.filling.push(array[Math.floor(Math.random() * array.length)]); }

            this.props.addFood(food);
            console.log(food.filling);
        }
        console.log('Great success adding', food);
        this.props.addFood(food);
    }

    generateFillings = (food, filling) => {
        if (food.id !== "6") {
            return <div>Täytteet: {food.filling.map((id, i) => <p key={i}>- {this.getFillingName(filling, id)}</p>)}</div>
        } else {
            return "-Voit saada mitä vain";
        }
    }

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
