import React from 'react';
import '../style/Header.css';
import logo1 from '../img/logo1.jpeg';

function Header() {
    return (
        <header>

            <div><img src={logo1} alt="Logo" className='log1' /></div>
            <p className='logo'>Printaegis</p>
            <div className="search-box">
                <input type="text" placeholder="Search..." />
            </div>

            <div className="categories">
                <a href='#' className='menu'><i className="fa-solid fa-circle-question"></i>Help</a>
                <a href='#' className='menu'><i className="fa-solid fa-circle-question"></i>Login</a>
                <a href='#' className='menu'><i className="fa-solid fa-circle-question"></i>Wishlist</a>
                <a href='#' className='menu'><i className="fa-solid fa-circle-question"></i>Cart</a>
            </div>

            <section> <div className="categories1">
                <a href='#' className='menu2'>Marketing Material</a>
                <a href='#' className='menu2'>Box & Packaging</a>
                <a href='#' className='menu2'>Signages & Banner</a>
                <a href='#' className='menu2'>Sticker & Label</a>
                <a href='#' className='menu2'>Stationery</a>
                <a href='#' className='menu2'>Gifting</a>
            </div></section>
        </header>


    );
}

export default Header;
