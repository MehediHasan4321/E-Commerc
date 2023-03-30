import React, { useEffect, useState } from 'react';
import Aside from './Aside/Aside';
import Products from './Products/Products';
const Main = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='grid grid-cols-5 container mx-auto mt-20'>
            <div className=' col-span-1'>
                <Aside products={products} />
            </div>
            <div className=' col-span-4'>
                <Products products={products} />
            </div>
        </div>
    );
};

export default Main;