import moment from 'moment';

import { Navbar } from '../ui/navbar/Navbar';

import './Home.css';

const year = moment().format('YYYY');

export const HomeScreen = () => {
    return (
        // <div>
        
            <div className="home-screen">

                {/* <div className="navbar-home">
                    <Navbar />
                </div> */}
                <div className="home-glass">
                    {/* <div className="container-home"> */}
                        <div className="focus-picture">
                            <div className="card-glass">
                                <p>
                                    <span className="p-2">¡HOLA! 👋 SOY</span><br />
                                    <span className="p-3">SEBASTIAN</span><br />
                                    <span className="p-1">FRONTEND DEVELOPER</span><br />
                                </p>
                            </div>

                            {/* <img src="/assets/profile.png" className="profile-picture" alt="Sebastian Solis" /> */}
                            <img src="/assets/profile_final1.png"  alt="Sebastian Solis" />

                            <div className="twitter-card">
                                <a href="https://twitter.com/sebascript_" target="_blank" rel="noreferrer">
                                    <div className="card-container">
                                        <img src="/assets/twitter.svg" className="social-logo" alt="@sebascript_" />
                                        <p className="hidden">
                                            <span className="p-1">Twitter</span><br />
                                            <span className="p-2">@sebascript_</span><br />
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div className="whatsapp-card">
                                <a href="https://api.whatsapp.com/send?phone=593987280693" target="_blank" rel="noreferrer">
                                    <div className="card-container">
                                        <img src="/assets/whatsapp.svg" className="social-logo" alt="Contacto por Whatsapp" />
                                        <p className="hidden">
                                            <span className="p-1">Whatsapp</span><br />
                                            <span className="p-2">Contacto directo</span><br />
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div className="instagram-card">
                                <a href="https://www.instagram.com/portfolio__ui/" target="_blank" rel="noreferrer">
                                    <div className="card-container">
                                        <img src="/assets/instagram.svg" className="social-logo" alt="@portfolio__ui" />
                                        <p className="hidden">
                                            <span className="p-1">Instagram</span><br />
                                            <span className="p-2">@portfolio__ui</span><br />
                                        </p>
                                    </div>
                                </a>
                            </div>

                        </div>

                        <div className="card-glass-copy">
                            <p>@{ year } | Todos los derechos reservados  
                                <a className="decoration-link pl-1" href="https://twitter.com/sebascript_" target="_blank" rel="noreferrer">
                                    @sebascript_
                                </a>
                            </p>
                        </div>
                    {/* </div> */}
                </div>
                <Navbar />
            </div>
        // </div>
    )
}
