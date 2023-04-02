import React, { useEffect, useState } from 'react';

const ProdcutCart = ({ product,handleAddToCart }) => {
    const { name, price, img, ratings,id} = product
    const [reating, setReting] = useState(<span className='space-x-2 text-purple-500'>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
    </span>)
    
    useEffect(()=>{
        const fiveSter = <span className='space-x-2 text-purple-500'>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
    </span>
    const fourStar = <span className='space-x-2 text-purple-500'>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
    </span>
    const threeStar = <span className='space-x-2 text-purple-500'>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
    </span>
    if(ratings===5){
        setReting(fiveSter)
    }else if(ratings === 4){
        setReting(fourStar)
    }
    else if(ratings === 3){
        setReting(threeStar)
    }
    
    },[ratings])
    
    return (
        <div className='w-96 h-[550px] border-2 border-gray-200 rounded p-2 relative'>
            <img className=' h-[350px] w-full' src={img} alt="Single Product images" />
            <div className='mt-6 px-4 space-y-3 bg-white'>
                <h3 className='text-xl '>{name}</h3>
                <div className='flex justify-between items-center'>
                    <p className='text-lg '>Price : ${price}</p>
                    <p>{reating}</p>
                </div>

            </div>
            <button onClick={()=>{handleAddToCart(id)}} className='px-6 py-2 bg-purple-500 text-white text-lg w-full rounded absolute bottom-0 right-0'>Add To Cart <span className='ml-2'><i class="fa-solid fa-cart-plus"></i></span></button>
        </div>
    );
};

export default ProdcutCart;