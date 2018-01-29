import React, { Component } from 'react';
import ProductItem from './product-item';

class ProductList extends Component {
    handleAddFood = (food) => {
        console.log('Great success adding', food);
        this.props.addFood(food);
    }

    getFillingName = (filling, id) => {
        return filling.filter(f => f.id === id).map(f => f.name);
    }

    render() {
        const { food, filling } = this.props;
        return (
            <div className="product-list">
                <h3>Ruuat</h3>
                <ul>
                    {
                        filling !== null && food !== null && food.map((food, i) =>
                            <ProductItem key={i} food={food} getFillingName={this.getFillingName} handleAddFood={this.handleAddFood} filling={filling} />
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default ProductList;
