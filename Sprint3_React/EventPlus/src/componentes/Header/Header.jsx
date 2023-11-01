import React from 'react';
import './Header.css'

import Container from '../Container/Container'
import Nav from '../Nav/Nav'
import PerfilUsuario from '../PerfilUsuario/PerfilUsuario';

import MenuBar from '../../assets/images/menubar.png'
import logMobile from '../../assets/images/logo-white.svg'
import logDesktop from '../../assets/images/logo-pink.svg'


const Header = () => {
    return (
        <header className='headerpage'> 
        <Container>
            <div className='header-flex'>
                <img src={MenuBar} alt="Imagem menu de barras. Serve para exibir ou esconder o menu no smartphone" />

                <Nav />
                <PerfilUsuario />
            </div>
        </Container>
        </header>
    );
};

export default Header;