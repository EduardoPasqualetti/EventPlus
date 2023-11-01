import React from 'react';
import './Container.jsx'

const Container = ({children}) => {
    return (
        <div className='container'>
            {children}
        </div>
    );
};

export default Container;