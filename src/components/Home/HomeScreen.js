import moment from 'moment';
import {motion} from 'framer-motion/dist/es/index';

import './Home.css';

const year = moment().format('YYYY');

export const HomeScreen = () => {
    return (
        <div className="container-home">
            <div className="home-screen">
                <div className="first-column">
                    <motion.div
                        className="card-glass"
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <p>
                            <span className="p-2">¡HOLA! 👋 SOY</span><br />
                            <span className="p-3">SEBASTIAN</span><br />
                            <span className="p-1">FRONTEND DEVELOPER</span><br />
                        </p>
                    </motion.div>
                </div>

                <div className="second-column">
                    <motion.div
                        className="second-column-animated"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <img src="/assets/profile.png"  alt="Sebastian Solis" />
                    </motion.div>
                </div>

                <div className="third-column">
                    <motion.div
                        className="third-column-animated"
                        initial={{ scale: 0.59 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
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
                    </motion.div>
                </div>

            </div>
            
            <div className="card-glass-copy">
                <p>@{ year } | Todos los derechos reservados  
                    <a className="decoration-link pl-1" href="https://twitter.com/sebascript_" target="_blank" rel="noreferrer">
                        @sebascript_
                    </a>
                </p>
            </div>
        </div>
    )
}
