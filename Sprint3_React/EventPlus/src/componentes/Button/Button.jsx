import React from 'react';

const Button = ({textButton,type, fnClick}) => {
    return (
        <button type={type} onClick={fnClick} >
            {textButton}
        </button>
    );
};

export default Button;