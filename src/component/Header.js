import React from 'react';
import '../style/Header.css';
import logo1 from '../img/logo1.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faMagnifyingGlass, faUser, faHeart, faBagShopping } from '@fortawesome/free-solid-svg-icons';
function Header() {
    return (
        <header>
            <div className='container'>
                <div className='logtct'><img src={logo1} alt="Logo" className='log1' />
                    <p className='logo'>Printaegis</p></div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Philosopher" />
                <div className="search-box">
                    <FontAwesomeIcon className='menu4' icon={faMagnifyingGlass} /><input type="text" placeholder="Search" />
                </div>

                <div className="categories">
                    <a href='#' className='menu'><FontAwesomeIcon icon={faCircleQuestion} className='menu1' />Help</a>
                    <a href='#' className='menu'> <FontAwesomeIcon icon={faUser} className='menu1' />Login</a>
                    <a href='#' className='menu'><FontAwesomeIcon icon={faHeart} className='menu1' />Wishlist</a>
                    <a href='#' className='menu'><FontAwesomeIcon icon={faBagShopping} className='menu1' />Cart</a>
                </div>
            </div>
            <section>
                <div className='container'>
                    <div className="categories1">
                        <a href='#' className='menu2'>Marketing Material</a>
                        <a href='#' className='menu2'>Box & Packaging</a>
                        <a href='#' className='menu2'>Signages & Banner</a>
                        <a href='#' className='menu2'>Sticker & Label</a>
                        <a href='#' className='menu2'>Stationery</a>
                        <a href='#' className='menu2'>Gifting</a>
                    </div>
                </div>
            </section>
        </header>


    );
}

export default Header;
