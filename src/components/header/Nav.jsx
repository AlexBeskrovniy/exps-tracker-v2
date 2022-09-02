import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
                <NavLink to="/categories" className="nav-link px-3 text-uppercase"
                    style={({ isActive }) => ({ color: isActive ? '#FFC107' : 'white'})}
                >
                   
                    Categories
                </NavLink>
            </li>
            <li>
                <NavLink to="/records" className="nav-link px-3 text-uppercase"
                    style={({ isActive }) => ({ color: isActive ? '#FFC107' : 'white' })}
                >
                    All Records
                </NavLink>
            </li>
        </ul>
    );
}

export default Nav;