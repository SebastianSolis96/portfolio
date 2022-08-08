export const projects = [
    {
        'id': 1,
        'title': 'SISTEMA DE FACTURACIÓN WEB',
        'url': '/assets/invoice_web_5.svg',
        'tag_project': 'react',
        'buttons': [ 
            'more' 
        ],
        'imgs_carousel': [ 
            '/assets/invoice_web_1.svg', 
            '/assets/invoice_web_2.svg', 
            '/assets/invoice_web_3.svg', 
            '/assets/invoice_web_4.svg', 
            '/assets/invoice_web_5.svg' 
        ],
        'language': [ 
            'HTML', 
            'CSS', 
            'JAVASCRIPT', 
            'REACT', 
            'REDUX', 
            'NODEJS', 
            'EXPRESS', 
            'POSTGRESQL', 
            'HEROKU' 
        ],
        'info': [ 
            `Este es un proyecto realizado para una empresa en concreto, por lo que no es posible publicar un demo o el repositorio en GitHub. Dicho proyecto estuvo a cargo únicamente de mí bajo el Stack PERN (PostgreSQL, Express.js, React, NodeJS) y consiste en el desarrollo de una aplicación web para el proceso de ventas de un ERP existente. El proyecto permite el manejo de clientes, artículos, servicios y facturación.`,
            `Comencé con el desarrollo de un solo Backend que permita conectarse con múltiples bases de datos PostgreSQL en un mismo servidor según el privilegio de usuario. Fue construido con NodeJS, Express.js, JWT (JSON Web Tokens) para el control de usuarios y sesiones, uso de CORS, variables de entorno y Express Validator para la validación de la información obtenida mediante middlewares. Las APIs construidas permiten recibir y entregar información en formato JSON. Una vez culminado el Backend, se lo desplegó en Heroku.`,
            `En cuanto al Frontend, su UI/UX fueron diseñadas en Figma y posteriormente en CSS3 puro sin uso de templates ni frameworks. La aplicación web está desarrollada con React moderno y JavaScript ES6 (ECMAScript 6). Es una aplicación SPA (Single Page Application) desarrollada con React Router DOM V6 incluyendo control de rutas públicas y privadas según el estado de inicio de sesión validado por JWT (JSON Web Tokens) desde el Backend.`,
            `Se utilizó Redux para el manejo de estados globales, Fetch para el llamado a las APIs y control de respuestas en formato JSON, funciones asíncronas con async-await para receptar la información, Lazy Loading – Suspense para el manejo de renderización de componentes pre y post obtención de la información pertinente, custom Hooks y Hooks de React como: useState, useEffect, useRef y useMemo. `,
            `La aplicación es responsive, por lo que se puede usar en diferentes dispositivos con distintos tamaños de pantalla.`
        ],
    },
    {
        'id': 2,
        'title': 'MI PORTAFOLIO',
        'url': '/assets/portfolio_1.svg',
        'tag_project': 'react',
        'buttons': [
            'more', 
            'github'
        ],
        'link_github': 'https://github.com/SebastianSolis96/Portfolio_Sebastian',
        'imgs_carousel': [ 
            '/assets/portfolio_1.svg', 
            '/assets/portfolio_2.svg', 
            '/assets/portfolio_3.svg', 
            '/assets/portfolio_4.svg', 
            '/assets/portfolio_5.svg'
        ],
        'language': [ 
            'HTML', 
            'CSS', 
            'JAVASCRIPT', 
            'REACT' 
        ],
        'info': [
            `Este es un proyecto realizado para mostrar información sobre mí, mis proyectos, habilidades y medios de contacto.`,
            `La UI/UX fue diseñada en Figma y posteriormente en CSS3 puro sin uso de templates ni frameworks. La aplicación web está desarrollada con React moderno y JavaScript ES6 (ECMAScript 6). Es una aplicación SPA (Single Page Application) desarrollada con React Router DOM V6.`,
            `Se utilizó Context para el manejo de estados, componentes reutilizables y Hooks de React como: useState, useEffect, useRef y useMemo.`,
            `La aplicación es responsive, por lo que se puede usar en diferentes dispositivos con distintos tamaños de pantalla.`,
        ],
    },
    {
        'id': 3,
        'title': 'SISTEMA DE FACTURACIÓN APK',
        'url': '/assets/invoice_apk_1.svg',
        'tag_project': 'android',
        'buttons': [
            'more'
        ],
        'imgs_carousel': [ 
            '/assets/invoice_apk_1.svg',
        ],
        'language': [ 
            'JAVA', 
            'ANDROID STUDIO' 
        ],
        'info': [
            `Este es un proyecto realizado para una empresa en concreto, por lo que no es posible publicar un demo o el repositorio en GitHub. Dicho proyecto estuvo a cargo únicamente de mí y consiste en el desarrollo de una aplicación para Android del proceso de ventas y compras de un ERP existente. El proyecto permite el manejo de clientes, artículos, servicios, facturación y cotización para el proceso de ventas y permite el manejo de proveedores, facturación en compras y retención en la fuente para el proceso de compras.`,
            `Dicho proyecto fue realizado con JAVA en el IDE Android Studio usando el patrón de arquitectura MVC, empleando comunicación y navegación entre Activities, Fragments para la navegación mediante una barra inferior al estilo de Instagram, Tiktok, Facebook, etc.`,
            `Así mismo, se utilizó CustomDialogs para mostrar mensajes de confirmación, permitir la búsqueda y obtención de información sin salir de la Activity o del Fragment, por lo que se empleó comunicación entre Dialogs-Activity y Dialogs-Fragments.`,
            `Se empleó el uso de AsyncTask (Tareas asíncronas) para controlar la carga de Activities y Fragments pre y post obtención de la información necesaria.`,
            `La aplicación también emplea el uso de SharedPreferences para guardar información de las sesiones y no mostrar el Login a menos que dicha información no se encuentre guardada en el dispositivo.`,
            `La aplicación cuenta con modo día y modo noche, cuyo parámetro se lo obtiene según la configuración del celular del usuario. La UI se adapta a diferentes tamaños de celulares y también cambia según soporte el API del sistema operativo del usuario.`
        ],
    },
    {
        'id': 4,
        'title': 'SUSHI APP',
        'url': '/assets/sushi_1.svg',
        'tag_project': 'ui',
        'buttons': [
            'more', 
            'demo'
        ],
        'link_demo': 'https://www.instagram.com/reel/CalHTtOpK0X/?utm_source=ig_web_copy_link',
        'imgs_carousel': [ 
            '/assets/sushi_1.svg' 
        ],
        'language': [ 
            'FIGMA', 
            'POTHOSHOP' 
        ],
        'info': [
            `Este es un proyecto de UI (Interfaz de usuario) a manera de inspiración, utilizando Figma y apoyado con recursos realizados en Photoshop para una aplicación de venta de Sushi y extras.`
        ],
    },
    {
        'id': 5,
        'title': 'SPOTITUBE',
        'url': '/assets/spotitube_1.svg',
        'tag_project': 'ui',
        'buttons': [
            'more', 
            'demo'
        ],
        'link_demo': 'https://www.instagram.com/p/CWQ9j7DJr-j/?utm_source=ig_web_copy_link',
        'imgs_carousel': [ 
            '/assets/spotitube_2.svg', 
            '/assets/spotitube_3.svg', 
            '/assets/spotitube_4.svg', 
            '/assets/spotitube_5.svg', 
            '/assets/spotitube_6.svg' 
        ],
        'language': [ 
            'FIGMA', 
            'POTHOSHOP' 
        ],
        'info': [
            `Este es un proyecto de UI (Interfaz de usuario) y prototipo a manera de inspiración, utilizando Figma y apoyado con recursos realizados en Photoshop para una aplicación de reproducción multimedia. Está inspirada en Spotify y Youtube y se llama Spotitube.`
        ],
    },
    {
        'id': 6,
        'title': 'BLOOB STORE',
        'url': '/assets/bloob_1.svg',
        'tag_project': 'html',
        'buttons': [
            'more',
            'github', 
            'demo'
        ],
        'link_github': 'https://github.com/SebastianSolis96/bloob-store',
        'link_demo': 'https://sebastiansolisporfolio.on.drv.tw/Bloob%20Store',
        'imgs_carousel': [ 
            '/assets/bloob_1.svg', 
            '/assets/bloob_2.svg', 
            '/assets/bloob_3.svg', 
            '/assets/bloob_4.svg', 
            '/assets/bloob_5.svg', 
            '/assets/bloob_6.svg', 
            '/assets/bloob_7.svg', 
            '/assets/bloob_8.svg', 
            '/assets/bloob_9.svg', 
        ],
        'language': [ 
            'HTML', 
            'CSS',
            'JAVASCRIPT' 
        ],
        'info': [
            `Este es un proyecto de UI (Interfaz de usuario) realizado con HTML, CSS y JavaScript a manera de inspiración para una tienda en línea de venta de ropa, calzado y accesorios llamada Bloob Store.`
        ],
    },
    {
        'id': 7,
        'title': 'FORM VALIDATOR',
        'url': '/assets/form_validator_1.svg',
        'tag_project': 'ui',
        'buttons': [
            'more', 
            'github',
            'demo'
        ],
        'link_github': 'https://github.com/SebastianSolis96/form-validator',
        'link_demo': 'https://sebastiansolisporfolio.on.drv.tw/Form%20Validator/',
        'imgs_carousel': [ 
            '/assets/form_validator_1.svg'
        ],
        'language': [ 
            'HTML', 
            'CSS',
            'JAVASCRIPT',
            'REGULAR EXPRESSIONS' 
        ],
        'info': [
            `Este es un proyecto de validación de formulario realizado con HTML, CSS y JavaScript que permite mostrar mensajes e indicadores en los inputs para que el usuario sepa si la información que está ingresando es correcta o no antes de enviar el formulario. Se emplea Expresiones Regulares para la validación de los datos obtenidos en cada input.`
        ],
    },
    {
        'id': 8,
        'title': 'DIGITAL CLOCK',
        'url': '/assets/digital_clock_1.svg',
        'tag_project': 'html',
        'buttons': [
            'more',
            'github', 
            'demo'
        ],
        'link_github': 'https://github.com/SebastianSolis96/digital-clock',
        'link_demo': 'https://sebastiansolisporfolio.on.drv.tw/Digital%20Clock/',
        'imgs_carousel': [ 
            '/assets/digital_clock_1.svg'
        ],
        'language': [ 
            'HTML', 
            'CSS',
            'JAVASCRIPT' 
        ],
        'info': [
            `Este es un proyecto realizado con HTML, CSS y JavaScript que muestra un reloj digital, en tiempo real, que marca las horas, minutos, segundos en formato PM e indica la fecha en formato día de la semana, nombre del mes, día del mes y el año.`
        ],
    },
    {
        'id': 9,
        'title': 'TODO APP',
        'url': '/assets/todo_app_1.svg',
        'tag_project': 'html',
        'buttons': [
            'more',
            'github', 
            'demo'
        ],
        'link_github': 'https://github.com/SebastianSolis96/todo-app',
        'link_demo': 'https://sebastiansolisporfolio.on.drv.tw/To%20Do/',
        'imgs_carousel': [ 
            '/assets/todo_app_1.svg'
        ],
        'language': [ 
            'HTML', 
            'CSS',
            'JAVASCRIPT' 
        ],
        'info': [
            `Este es un proyecto realizado con HTML, CSS y JavaScript que permite gestionar tareas agregándolas a una lista o eliminándolas si ya las cumplimos.`
        ],
    },
]