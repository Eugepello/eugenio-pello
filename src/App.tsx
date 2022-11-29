import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Habilidades from './components/Habilidades';
import Portafolio from './components/Portafolio';
import Certificados from './components/Certificados';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './config/language-config';
import './App.css';

function App() {
  return (
    <Suspense fallback='Cargando traducción...'>
      <NavBar />
      <Banner />
      <Habilidades />
      <Portafolio />
      <Certificados />
      <Contacto />
      <Footer />
    </Suspense>
  );
}

export default App;
