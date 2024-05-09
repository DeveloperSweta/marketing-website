import React from 'react';
import '../style/PopularProduct.css'
import { ProductTile } from './ProductTile';


function ProductsSection({headline, productsData}) {
    return (
        <div className='popular'>
            <div className="popular-product">
                <h3 className='mpop'>{headline}</h3>
                <div className="container">
                {productsData.map(product =><ProductTile key={product.id} url={product.url} title={product.title} />)}
                </div>
            </div>
        </div>
    );
}

export default ProductsSection;