import React from 'react';
import Titulo from '../../components/Titulo/Titulo';
import './EventosPage.css';
import eventoImage from "../../assets/images/evento.svg"
import ImageIlustrator from "../../components/ImageIlustrator/ImageIlustrator";


const EventosPage = () => {
    return (
        <div>
            <Titulo  titleText={"Eventos Page"} className = "margem_acima"/>
            <ImageIlustrator imageRender={eventoImage}/>
        </div>
    );
};

export default EventosPage;