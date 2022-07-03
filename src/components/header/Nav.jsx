import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
                <Link to="/categories" className="nav-link px-3 text-white text-uppercase">
                    Categories
                </Link>
            </li>
            <li>
                <Link to="/records" className="nav-link px-3 text-white text-uppercase">
                    All Records
                </Link>
            </li>
        </ul>
    );
}

export default Nav;