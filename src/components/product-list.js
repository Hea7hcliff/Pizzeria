import React, { Component } from 'react';
import ProductItem from './product-item';

class ProductList extends Component {
    handleAddPizza = (pizza) => {
        console.log('Great success', pizza);
        this.props.addPizza(pizza);
    }

    render() {
        const { data } = this.props;

        return (
            <div className="product-list">
                <h3>Pizzat</h3>
                <ul>
                    {
                        data !== null && data.map(
                            pizza => <ProductItem key={pizza.id} pizza={pizza} handleAddPizza={this.handleAddPizza} />
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default ProductList;