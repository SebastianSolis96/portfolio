import moment from 'moment';

import './Footer.css';
import logo from '../../../logo.svg';
import '../../public/assets/canoe.svg';


export const Footer = () => {

    const year = moment().format('YYYY');

    return (
        <div>
            <div className='container-logo'>
                <img src={logo} className="react-logo" alt="React logo" />
                <img src="/assets/canoe.png" className="canoe" alt="canoe" />
            </div>

            <footer className="footer">
                <p className='text-middle'>Estás navegando en un sitio hecho con React</p>

                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>

                <ul className="social-icon">
                    <li><a href="https://twitter.com/sebascript_" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com/portfolio__ui/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=593987280693" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a></li>
                </ul>

                <ul className="menu">
                    <li><a href="#a">Inicio</a></li>
                    <li><a href="#a">Sobre mi</a></li>
                    <li><a href="#a">Proyectos</a></li>
                    <li><a href="#a">Skills</a></li>
                    <li><a href="#a">Contacto</a></li>
                </ul>

                <p>@{ year } | Todos los derechos reservados  
                    <a className="decoration-link pl-1" href="https://twitter.com/sebascript_" target="_blank" rel="noreferrer">
                        @sebascript_
                    </a>
                </p>
            </footer>
        </div>
    );
}