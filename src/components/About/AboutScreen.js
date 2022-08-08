import {motion} from 'framer-motion/dist/es/index';

import { getAge } from '../../helpers/getAge';

import './About.css';

export const AboutScreen = () => {
    return (
        <div className="about-screen">
            <motion.div
                className="left-container"
                initial={{ x: -1000 }}
                animate={{ x: 1 }}
                transition={{ type: "tween", duration: 1.2 }}
            >
                <img className="about-img" src="/assets/about_me.png" alt="Sebastian Solis" />
                
                <a className="cv-button" href="/assets/CV-SEBASTIAN SOLIS.pdf"  target="_blank" rel="noreferrer">
                    DESCARGAR CV
                </a>
            </motion.div>

            <motion.div
                className="right-container"
                initial={{ x: 1000 }}
                animate={{ x: 1 }}
                transition={{ type: "tween", duration: 0.8 }}
            >
                <h1>Sobre mi 
                    <a href="https://github.com/SebastianSolis96" alt="github Sebastian Solis" target="_blank" rel="noreferrer">
                        <img src="/assets/github.svg" className="github-logo" alt="@sebascript_" />
                    </a>
                </h1>
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
            </motion.div>
        </div>
    )
}
