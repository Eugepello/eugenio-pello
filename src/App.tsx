import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Habilidades from './components/Habilidades';
import Portafolio from './components/Portafolio';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Habilidades />
      <Portafolio />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
