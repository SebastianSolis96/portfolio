import React from 'react';
import { getAge } from '../../helpers/getAge';

import './About.css';

export const AboutScreen = () => {
    return (
        <div className="about-screen">
            <div className="left-container">
                <img className="about-img" src="/assets/about_me.png" alt="Sebastian Solis" />
                
                <a className="cv-button" href="https:\google.com"  target="_blank" rel="noreferrer">
                    DESCARGAR CV
                </a>
                {/* <button className="cv-button">
                    DESCARGAR CV
                </button> */}
            </div>

            <div className="right-container">
                <h1>Sobre mi</h1>
                <div className="hr-title"></div>
                <p>
                    Soy Sebastian Solis, tengo {getAge()} años y actualmente resido en Quito, Ecuador.
                </p>

                <p>
                    Soy un profesional con experiencia en el desarrollo Frontend de aplicaciones web, 
                    con conocimientos en Backend, lo que me ha permitido tener una mayor visión de las 
                    tecnologías, buscando siempre experiencias nuevas y positivas que me permitan un 
                    crecimiento profesional para llegar a ser un desarrollador Full Stack.
                </p>

                <p>
                    A lo largo de mi formación académica y profesional he demostrado gran entusiasmo por la 
                    tecnología, el diseño y el aprendizaje autodidacta.
                </p>

                <p>
                    Soy una persona competitiva, proactiva y altamente organizada, capaz de adaptarse a los 
                    cambios y trabajar en equipo, siempre estoy presto a ayudar ya que tengo presente que enseñar 
                    es la mejor forma de aprender.
                </p>
            </div>
        </div>
    )
}
