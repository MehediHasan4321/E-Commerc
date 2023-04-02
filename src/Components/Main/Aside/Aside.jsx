import React, { useState } from 'react';

const Aside = ({ products }) => {
    const [inputValue,setInputValue] = useState(0)
    const menSneaker = products.filter(product => product.category === "Men's Sneaker")
    const menPants = products.filter(product => product.category === "Men's Pants")
    const Bag = products.filter(product => product.category === "Bag")
    const cap = products.filter(product => product.category === "Cap")
    const earphones = products.filter(product => product.category === "Earphones")
    const bottle = products.filter(product => product.category === "Bottle")
   
    return (
        <div className='bg-purple-200 mx-5 p-5 sticky top-20 space-y-6 rounded-md'>
            <div className='flex justify-between bg-purple-300 rounded-md py-2 px-5'>
                <li>Men Sneaker</li>
                <p>({menSneaker.length})</p>
            </div>
            <div className='flex justify-between bg-purple-300 rounded-md py-2 px-5'>
                <li>Men Pants</li>
                <p>({menPants.length})</p>
            </div>
            <div className='flex justify-between bg-purple-300 rounded-md py-2 px-5'>
                <li>Fahionabal Bags</li>
                <p>({Bag.length})</p>
            </div>
            <div className='flex justify-between bg-purple-300 rounded-md py-2 px-5'>
                <li>Fashionable Cap</li>
                <p>({cap.length})</p>
            </div>
            <div className='flex justify-between bg-purple-300 rounded-md py-2 px-5'>
                <li>Earphones</li>
                <p>({earphones.length})</p>
            </div>
            <div className='flex justify-between bg-purple-300 rounded-md py-2 px-5'>
                <li>Water Bottle</li>
                <p>({bottle.length})</p>
            </div>
            <div className='flex justify-between bg-purple-300 rounded-md py-2 px-5'>
                <input type="range" min='$0' max='$520' name="" id="rangeInp" />
                <p>(${inputValue})</p>
            </div>
            
        </div>
    );
};

export default Aside;