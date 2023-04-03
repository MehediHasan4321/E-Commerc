import React from 'react';
import Banner from './Banner/Banner';
import { Link } from 'react-router-dom';

const Header = ({productCount}) => {
    const header = document.getElementsByTagName('header')
    let lastScroll=0;
    window.addEventListener('scroll',()=>{
        const currentScroll = window.pageYOffset;
        if(currentScroll>lastScroll){
            header[0].classList.add('scroll-down')
        }else{
            header[0].classList.remove('scroll-down')
        }
        lastScroll = currentScroll
    })
    return (
        <>
            <header className='h-20 w-full bg-white shadow-md'>
                <nav className='container mx-auto h-full flex justify-between items-center'>
                    <h1 className='text-4xl font-semibold'>E- <span className='text-purple-400'>Commerc</span></h1>
                    <div className='flex items-center gap-6 uppercase font-semibold h-full text-purple-400'>
                        <Link to={'/product'}>Product</Link>
                        <Link to={'/about'}>About</Link>
                        <Link  to={'/contact'}>Contact</Link>
                        <Link to={'/loging'}>Log In</Link>
                        <div className=' relative'>
                            <a className='text-4xl' href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            </a>
                            <small className='text-purple-500 text-lg px-1 rounded-full absolute bottom-0 right-[5px] cursor-pointer '>{ productCount < 10 ? '0'+ productCount : productCount}</small>
                        </div>
                    </div>
                </nav>
            </header>
            <Banner/>
        </>
    );
};

export default Header;