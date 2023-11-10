import React from 'react';
import tipoEventoImage from "../../assets/images/tipo-evento.svg"
import eventoImage from "../../assets/images/evento.svg"
const ImageIlustrator = ({alteText, imageName, additionalClass}) => {
let imageResource
    
    switch (imageName) {
        case 'tipo-evento':
            imageResource = tipoEventoImage
            break;
        case 'evento' :
            imageResource = eventoImage
            break;
        default:
            break;
    }

    return (
        <figure className='ilustrator-box'>
            <img src={imageResource} alt={alteText} className={`illustrator-box__image ${additionalClass}`} />
        </figure>
    );
};

export default ImageIlustrator;