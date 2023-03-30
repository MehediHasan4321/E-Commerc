import React from 'react';
import ProdcutCart from './ProductCart/ProdcutCart';

const Products = ({products}) => {
    return (
        <div className=' flex flex-wrap gap-5'>
            {
            products.map(product=><ProdcutCart key={product.id} product={product} />)
            }
        </div>
    );
};

export default Products;