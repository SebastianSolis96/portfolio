import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';

import './Contact.css';

export const ContactScreen = () => {

    const handleOpenContact = (url) => {
        window.open(url, '_blank').focus();
    }

    return (
        <div className="contact-screen">
            
            <div className="cards-container">
                <div 
                    onClick={ () => handleOpenContact('https://twitter.com/sebascript_') }
                    className="card twitter"
                >
                    <div className="logo-card">
                        <RenderSmoothImage src="/assets/twitter.svg" alt="@sebascript_" />
                    </div>
                    <div className="info-card">
                        <p className="title-card">TWITTER</p>
                        <p className="user-card">sebascript_</p>
                    </div>
                </div>

                <div
                    onClick={ () => handleOpenContact('https://www.instagram.com/portfolio__ui/') } 
                    className="card instagram"
                >
                    <div className="logo-card">
                        <RenderSmoothImage src="/assets/instagram_white.svg" alt="@portfolio__ui" />
                    </div>
                    <div className="info-card">
                        <p className="title-card">INSTAGRAM</p>
                        <p className="user-card">portfolio__ui</p>
                    </div>
                </div>

                <div
                    onClick={ () => handleOpenContact('mailto:sebasolis@hotmail.es?Subject=DESEO%20PONERME%20EN%20CONTACTO&Body=Saludos%20cordiales.%0A%0ARevis%E9%20tu%20portafolio%20y%20deseo%20ponerme%20en%20contacto%20contigo.') } 
                    className="card outlook"
                >
                    <div className="logo-card">
                        <RenderSmoothImage src="/assets/outlook.svg" alt="sebasolis@hotmail.es" />
                    </div>
                    <div className="info-card">
                        <p className="title-card">OUTLOOK</p>
                        <p className="user-card email">sebasolis@hotmail.es</p>
                    </div>
                </div>

                <div
                    onClick={ () => handleOpenContact('https://api.whatsapp.com/send?phone=5930987280693&text=Hola.%20Vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte.') } 
                    className="card whatsapp"
                >
                    <div className="logo-card">
                        <RenderSmoothImage src="/assets/whatsapp.svg" alt="whatsapp" />
                    </div>
                    <div className="info-card">
                        <p className="title-card">WHATSAPP</p>
                    </div>
                </div>
            </div>

        </div>
    )
}