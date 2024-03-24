import React from 'react';

import '../../assets/styles/index.css';
import Logo from '../../assets/images/components/header/Logo.svg';
import VRNas from '../../assets/images/components/header/VRNas.svg';
import expand_more from '../../assets/images/components/header/expand_more.svg';
import Vector from '../../assets/images/components/header/Vector.svg';


const Header  = () => {
    return (
        <section>
            <div className="header">
                <div className="header__logo">
                    <a className="header__logo" href="/">
                        <div className="header__logo_icon">
                            <img src={Logo} alt="logo_icon"/>
                        </div>
                        <div className="header__logo_name">
                            <img src={VRNas} alt="VRNas"/>
                        </div>
                    </a>
                </div>
                <div className="header__nav">
                    <nav className="header__nav_menu">
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Service</li>
                            <li>
                                Page
                                <img src={expand_more} alt="expand_more"/>
                            </li>
                            <li>
                                Blog
                                <img src={expand_more} alt="expand_more"/>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__button">
                    <button className="header__contact_button">Contact us</button>
                </div>

                <div className="hamburger-menu">
                    <input type="checkbox" id="menu__toggle"/>
                    <label htmlFor="menu__toggle" className="menu__btn">
                        <span></span>
                    </label>
                    <ul className="menu__box">
                        <li className="menu__box_item">
                            <a href="#" className="menu__item">Home</a>
                        </li>
                        <li className="menu__box_item">
                            <a href="#" className="menu__item">About us</a>
                        </li>
                        <li className="menu__box_item">
                            <a href="#" className="menu__item">
                                Page <img src={expand_more} alt="expand_more"/>
                            </a>
                        </li>
                        <li className="menu__box_item">
                            <a href="#" className="menu__item">
                                Blog <img src={expand_more} alt="expand_more"/>
                            </a>
                        </li>
                        <li className="menu__item_btn">
                            <button className="menu__item">Contact us</button>
                        </li>
                    </ul>
                </div>

                <img className="header__vector" src={Vector} alt="vector"/>

            </div>
        </section>
);
};

export default Header;