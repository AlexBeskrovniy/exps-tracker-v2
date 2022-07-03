import React from 'react';
import { Link } from 'react-router-dom';
import logoCoin from '../../img/coin-logo.jpg';

const Logo = () => {
    return (
        <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 ms-2 text-white text-decoration-none">
            <img src={logoCoin} alt="Logo" width="50" height="50"/>
        </Link>
    );
}

export default Logo;