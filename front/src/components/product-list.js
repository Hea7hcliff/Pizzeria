import React, { Component } from 'react';
import ProductItem from './product-item';

class ProductList extends Component {


    render() {
        const { foods, fillings, generateFillings, handleAddFood } = this.props;
        return (
            <div className="product-list">
                <h3>Ruuat</h3>
                <ul>
                    {
                        fillings !== null && foods !== null && foods.map((food, i) =>
                            <ProductItem key={i} food={food} generateFillings={generateFillings} handleAddFood={handleAddFood} fillings={fillings} />
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default ProductList;
