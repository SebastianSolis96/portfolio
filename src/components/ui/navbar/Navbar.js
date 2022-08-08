import { Link, NavLink } from 'react-router-dom';

import './Navbar.css';

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link
                to="/"
            >
                <img src="/assets/logo.svg" className="logo hidden" alt="logo" />
            </Link>
            
            <div className="menu">
                <ul>
                    <li className="hidden-item">
                        <NavLink
                            className={ ({ isActive }) => '' + (isActive ? 'active' : '')}
                            to="/"
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li className="show-item">
                        <NavLink
                            className={ ({ isActive }) => (isActive ? 'active-phone' : '')}
                            to="/"
                        >
                            <div className='menu-icon' alt='ícono de inicio'>
                                <div className="icon-home"></div>
                            </div>
                        </NavLink>
                    </li>
                    
                    <li className="hidden-item">
                        <NavLink
                            className={ ({ isActive }) => '' + (isActive ? 'active' : '')}
                            to="/sobre-mi"
                        >
                            Sobre mi
                        </NavLink>
                    </li>

                    <li className="show-item">
                        <NavLink
                            className={ ({ isActive }) => (isActive ? 'active-phone' : '')}
                            to="/sobre-mi"
                        >
                            <div className='menu-icon' alt='sobre mi'>
                                <div className="icon-me"></div>
                            </div>
                        </NavLink>
                    </li>
                    
                    <li className="hidden-item">
                        <NavLink
                            className={ ({ isActive }) => '' + (isActive ? 'active' : '')}
                            to="/skills"
                        >
                            Skills
                        </NavLink>
                    </li>
                    
                    <li className="show-item">
                        <NavLink
                            className={ ({ isActive }) => (isActive ? 'active-phone' : '')}
                            to="/skills"
                        >
                            <div className='menu-icon' alt='habilidades'>
                                <div className="icon-skills"></div>
                            </div>
                        </NavLink>
                    </li>
                    
                    <li className="hidden-item">
                        <NavLink
                            className={ ({ isActive }) => '' + (isActive ? 'active' : '')}
                            to="/proyectos"
                        >
                            Proyectos
                        </NavLink>
                    </li>

                    <li className="show-item">
                        <NavLink
                            className={ ({ isActive }) => (isActive ? 'active-phone' : '')}
                            to="/proyectos"
                        >
                            <div className='menu-icon' alt='proyectos'>
                                <div className="icon-projects"></div>
                            </div>
                        </NavLink>
                    </li>

                    <li className="hidden-item">
                        <NavLink
                            className={ ({ isActive }) => '' + (isActive ? 'active' : '')}
                            to="/contacto"
                        >
                            Contacto
                        </NavLink>
                    </li>

                    <li className="show-item">
                        <NavLink
                            className={ ({ isActive }) => (isActive ? 'active-phone' : '')}
                            to="/contacto"
                        >
                            <div className='menu-icon' alt='contacto'>
                                <div className="icon-contact"></div>
                            </div>
                        </NavLink>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
}
