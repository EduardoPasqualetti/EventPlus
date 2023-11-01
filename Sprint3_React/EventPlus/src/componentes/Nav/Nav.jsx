import React from 'react';
import './Nav.css'

import logMobile from '../../assets/images/logo-white.svg'
import logDesktop from '../../assets/images/logo-pink.svg'


const Nav = () => {
    return (
        <nav className='navbar'>
            <span className='navbar__close'></span>

            <a href="" className='eventlogo'>
                <img className='eventologo_logo-image' src={window.innerWidth >= 992 ? logoDesktop : logMobile} alt="Event Plus Logo" />
            </a>

            <div className='navbar__items-box'>
                <a href="">Home</a>
                <a href="">Tipos de Evento</a>
                <a href="">Usuarios</a>
            </div>
        </nav>
    );
};

export default Nav;