import React from 'react';
import '../style/PopularProduct.css'
import { ProductTile } from './ProductTile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

function ProductsSection({headline, productsData, ViewMore}) {
    return (
        <div className='popular'>
            <div className="popular-product">
                <h3 className='mpop'>{headline}</h3>
                <div><FontAwesomeIcon icon={faArrowLeft} className='aro'/></div>
                <a href='#' className='viw'>{ViewMore}<FontAwesomeIcon icon={faArrowRight} className='aro2'/></a>
                <div className="container">
                {productsData.map(product =><ProductTile url={product.url || ''} title={product.title} />)}
                </div>
            </div>
        </div>
    );
}

export default ProductsSection;