import React from 'react';
import logo from '../img/logo.png';

const Header = () => {
    return (
        <>
            {/* Header */}
            <header className='center animate__animated animate__jackInTheBox'>
                <img src={ logo } alt='' />
            </header>
        </>
    )
}

export default Header
