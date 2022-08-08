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
                    <img src="/assets/twitter.svg" className="logo-card" alt="@sebascript_" />
                    <div className="info-card">
                        <p className="title-card">TWITTER</p>
                        <p className="user-card">sebascript_</p>
                    </div>
                </div>

                <div
                    onClick={ () => handleOpenContact('https://www.instagram.com/portfolio__ui/') } 
                    className="card instagram"
                >
                    <img src="/assets/instagram_white.svg" className="logo-card" alt="@portfolio__ui" />
                    <div className="info-card">
                        <p className="title-card">INSTAGRAM</p>
                        <p className="user-card">portfolio__ui</p>
                    </div>
                </div>

                <div
                    onClick={ () => handleOpenContact('mailto:sebasolis@hotmail.es?Subject=DESEO%20PONERME%20EN%20CONTACTO&Body=Saludos%20cordiales.%0A%0ARevis%E9%20tu%20portafolio%20y%20deseo%20ponerme%20en%20contacto%20contigo.') } 
                    className="card outlook"
                >
                    <img src="/assets/outlook.svg" className="logo-card" alt="sebasolis@hotmail.es" />
                    <div className="info-card">
                        <p className="title-card">OUTLOOK</p>
                        <p className="user-card email">sebasolis@hotmail.es</p>
                    </div>
                </div>

                <div
                    onClick={ () => handleOpenContact('https://api.whatsapp.com/send?phone=5930987280693&text=Hola.%20Vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte.') } 
                    className="card whatsapp"
                >
                    <img src="/assets/whatsapp.svg" className="logo-card" alt="whatsapp" />
                    <div className="info-card">
                        <p className="title-card">WHATSAPP</p>
                    </div>
                </div>
            </div>

        </div>
    )
}