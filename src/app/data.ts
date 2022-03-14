import { ICONS } from './icons.fa';
import { intJSON } from './interfaces/app.interface';

export const data: intJSON = {
    contacto: [
        {
            titulo: 'WhatsApp',
            subtitulo: 'Click aqui!',
            clases: 'fab fa-whatsapp icono',
            icon: ICONS.faWhatsapp,
        },
        {
            titulo: 'Telefono',
            subtitulo: '🇵🇪 935 421 132',
            clases: 'fas fa-phone-alt icono',
            icon: ICONS.faPhoneAlt,
        },
        {
            titulo: 'LinkedIn',
            subtitulo: 'Carlos Abramonte Chavez',
            clases: 'fab fa-linkedin icono',
            icon: ICONS.faLinkedin
        },
        {
            titulo: 'Git Hub',
            subtitulo: 'tatoo-carlos-23',
            clases: 'fab fa-github icono',
            icon: ICONS.faGithub,
        },
        {
            titulo: 'Correo',
            subtitulo: 'car.abr.04@gmail.com',
            clases: 'fas fa-mail-bulk icono',
            icon: ICONS.faMailBulk,
        },
    ],
    menu: [
        {
            tipo: 'inicio',
            clases: 'fas fa-home icc bg-azu',
            icon: ICONS.faHome,
        },
        {
            tipo: 'sobre_mi',
            clases: 'fas fa-user-alt icc bg-azu',
            icon: ICONS.faUserAlt,
        },
        {
            tipo: 'habilidades',
            clases: 'fas fa-layer-group icc bg-azu',
            icon: ICONS.faLayerGroup,
        },
        {
            tipo: 'educacion',
            clases: 'fas fa-graduation-cap icc bg-azu',
            icon: ICONS.faGraduationCap,
        },
        {
            tipo: 'portafolio',
            clases: 'fas fa-swatchbook icc bg-azu',
            icon: ICONS.faSwatchbook,
        },
        {
            tipo: 'contactame',
            clases: 'fas fa-id-card-alt icc bg-azu',
            icon: ICONS.faIdCardAlt,
        },
    ],
    educacion: [
        {
            univ: 'UNIVERSIDAD CÉSAR VALEJO - 🇵🇪',
            items: [
                {
                    nombre: 'Ingeniería de Sistemas 2016 - 2021',
                },
                {
                    nombre: 'Inglés basico',
                },
                {
                    nombre: 'Computación (Cisco)',
                } 
            ],
        },
        {
            univ: 'UDEMY',
            items: [
                {
                    nombre: 'JavaScript',
                },
                {
                    nombre: 'Html',
                },
                {
                    nombre: 'Css',
                },
                {
                    nombre: 'Angular',
                },
                {
                    nombre: 'React',
                },
            ],
        },
    ],
    habilidades: [
        {
            imagen: '../../../assets/html.png',
            nombre: 'HTML5',
            descripcion: 'HTML 5',
        },
        {
            imagen: '../../../assets/css.png',
            nombre: 'CSS3',
            descripcion: 'CSS3',
        },
        {
            imagen: '../../../assets/javascript.png',
            nombre: 'Java Script',
            descripcion: 'Java Script',
        },
        {
            imagen: '../../../assets/angular.png',
            nombre: 'Angular',
            descripcion: 'Angular',
        },
        {
            imagen: '../../../assets/php.png',
            nombre: 'Php',
            descripcion: 'Php',
        },
        {
            imagen: '../../../assets/bootstrap.png',
            nombre: 'Bootstrap',
            descripcion: 'Bootstrap',
        },
        {
            imagen: '../../../assets/mysql.png',
            nombre: 'MySql',
            descripcion: 'MySql',
        },
        {
            imagen: '../../../assets/sql_Server.png',
            nombre: 'Sql Server',
            descripcion: 'SQl Server',
        },
        {
            imagen: '../../../assets/visual_basic.png',
            nombre: 'Visual Basic',
            descripcion: 'Visual Basic.net',
        },
    ],
};
