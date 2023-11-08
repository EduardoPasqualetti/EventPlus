import React from 'react';
import Header from '../../components/Header/Header';
import Titulo from '../../components/Titulo/Titulo';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <div>
            <Header/>
            <Titulo  titleText={"Login"} className = "margem_acima"/>
        </div>
    );
};

export default LoginPage;