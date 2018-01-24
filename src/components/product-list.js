import React, { Component } from 'react';
import ProductItem from './product-item';

class ProductList extends Component {
    handleAddFood = (food) => {
        console.log('Great success adding', food);
        this.props.addFood(food);
    }

    render() {
        const { data } = this.props;

        return (
            <div className="product-list">
                <h3>Foods</h3>
                <ul>
                    {
                        data !== null && data.map((food, i) => <ProductItem key={i} food={food} handleAddFood={this.handleAddFood} />
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default ProductList;
