import React from 'react';
import Header from '../../components/Header/Header';
import Titulo from '../../components/Titulo/Titulo';
import './EventosPage.css';

const EventosPage = () => {
    return (
        <div>
            <Header />
            <Titulo  titleText={"Eventos Page"} className = "margem_acima"/>
        </div>
    );
};

export default EventosPage;