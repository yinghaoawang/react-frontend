import React from 'react';
import './Products.scss';
import { useProduct } from "../context/ProductContext";
import { useCart } from "../context/CartContext";

// Components
import Product from '../components/Product';

const Products = () => {
    const {products} = useProduct();
    const {addItem} = useCart();
    return (
        <div className="products-container">
            {products.map(product => (
                <Product
                    key={product.id}
                    product={product}
                    addItem={addItem}
                />
            ))}
        </div>
    );
};

export default Products;