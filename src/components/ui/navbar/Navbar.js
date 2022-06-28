import './Navbar.css';

export const Navbar = () => {
    return (
        <div className="navbar">
            <img src="/assets/logo.svg" className="logo hidden" alt="logo" />
            
            <div className="menu">
                <ul>
                    <li className="active hidden-item">Inicio</li>
                    <li className="show-item"><img src="/assets/home.png" className="menu-icon" alt="inicio" /></li>
                    
                    <li className="hidden-item">Sobre mi</li>
                    <li className="show-item"><img src="/assets/me.png" className="menu-icon" alt="sobre mi" /></li>
                    
                    <li className="hidden-item">Skills</li>
                    <li className="show-item"><img src="/assets/skills.png" className="menu-icon" alt="habilidades" /></li>
                    
                    <li className="hidden-item">Proyectos</li>
                    <li className="show-item"><img src="/assets/projects.png" className="menu-icon" alt="proyectos" /></li>
                    
                    <li className="hidden-item">Contacto</li>
                    <li className="show-item"><img src="/assets/contact.png" className="menu-icon" alt="contacto" /></li>
                </ul>
            </div>
        </div>
    );
}
