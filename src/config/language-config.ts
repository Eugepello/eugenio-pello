import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18next.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'es',
  resources: {
    es: {
      translation: {
        navbar: {
          home: 'Inicio',
          habilidades: 'Habilidades',
          portafolio: 'Portafolio',
          contacto: 'Contacto',
        },
        banner: {
          welcome: '¡Bienvenida/o a mi Website!',
          title: 'Soy Eugenio Pello, ',
          rotation: 'Desarrollador Web Front end',
          presentation: 'Tengo 24 años y me dedico a la programación desde hace casi un (1) año. Actualmente me dedico a desarrollar aplicaciones web, principalmente, a través de React JS ⚛️ con TypeScript 🟦. Mi objetivo a diario es seguir profundizando estas tecnologías para mejorar la experiencia del usuario y sus interfaces.'
        },
        skills: {
          title: 'Tecnologías',
          subtitle: 'Lenguajes, frameworks, librerías y preprocesadores que utilizo con frecuencia:',
        },
        portfolio: {
          title: 'Portafolio',
          more: '...para ver más proyectos, ingresá a mi perfil de '
        },
        certificados: {
          title: 'Certificados',
          subtitleCard: 'Diploma online de CoderHouse',
        },
        contacto: {
          thanks: 'Gracias por contactarme.',
          title: '¡Contactame!',
          form: {
            name: 'Nombre...',
            lastName: 'Apellido...',
            email: 'Email...',
            phone: 'Teléfono...',
            message: 'Mensaje...',
          },
          send: 'Enviar',
        },
        cv: 'Descargar CV',
        newsletter: {
          title: 'Suscribite a mi Newsletter para no perderte las últimas novedades.'
        },
        footer: `Desarrollado por Eugenio Pello. Todos los derechos reservados.`,
      }
    },
    en: {
      translation: {
        navbar: {
          home: 'Home',
          habilidades: 'Skills',
          portafolio: 'Portfolio',
          contacto: 'Contact me',
        },
        banner: {
          welcome: 'Welcome to my website!',
          title: `I'm Eugenio Pello, `,
          rotation: 'Front end Developer',
          presentation: `I am 24 years old and started programming almost a year ago. I'm dedicated to develop web applications, mainly through React JS ⚛️ with TypeScript 🟦. My daily goal is to continue deepening these technologies to improve the user experience and its interfaces.`
        },
        skills: {
          title: 'Technologies',
          subtitle: 'Languages, frameworks, libraries and preprocessors that I use frequently:',
        },
        portfolio: {
          title: 'Portfolio',
          more: '...for more projects, go to my '
        },
        certificados: {
          title: 'Certificates',
          subtitleCard: 'Online diploma from CoderHouse'
        },
        contacto: {
          thanks: 'Thanks for contacting me!',
          title: 'Contact me!',
          form: {
            name: 'Name...',
            lastName: 'Last name...',
            email: 'Email...',
            phone: 'Phone...',
            message: 'Message...',
          },
          send: 'Send',
        },
        cv: 'Download CV',
        newsletter: {
          title: `Subscribe to my Newsletter to not miss the latest news.`,
        },
        footer: `Developed by Eugenio Pello. All rights reserved.`,
      }
    }
  }
});