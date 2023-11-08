import React from 'react';
import Header from '../../components/Header/Header';
import Titulo from '../../components/Titulo/Titulo';
import './TipoEventosPage.css';

const TipoEventos = () => {
    return (
        <div>
            <Header />
            <Titulo  titleText={"Tipo Evento Page "} className = "margem_acima"/>
        </div>
    );
};

export default TipoEventos;