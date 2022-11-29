import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import Spain from '../assets/img/spain.png';
import Usa from '../assets/img/usa.png';
import Logo from '../assets/img/logo-e.png';
import Linkedin from '../assets/img/linkedin-in.svg';
import Instagram from '../assets/img/instagram.svg';
import Github from '../assets/img/github.svg';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  const changeToEnglish = () => {
    i18n.changeLanguage('en');
  };

  const changeToSpanish = () => {
    i18n.changeLanguage('es');
  };

  return (
    <BrowserRouter>
      <Navbar className={scrolled ? 'scrolled' : ''} expand='md'>
        <Container>
          <Navbar.Brand href='/'>
            <img alt='Logo' className='logo' src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'>
            <span className='navbar-toggler-icon' />
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                href='#home'
                onClick={() => onUpdateActiveLink('home')}>
                {t('navbar.home')}
              </Nav.Link>
              <Nav.Link
                className={activeLink === 'habilidades' ? 'active navbar-link' : 'navbar-link'}
                href='#habilidades'
                onClick={() => onUpdateActiveLink('habilidades')}>
                {t('navbar.habilidades')}
              </Nav.Link>
              <Nav.Link
                className={activeLink === 'portafolio' ? 'active navbar-link' : 'navbar-link'}
                href='#portafolio'
                onClick={() => onUpdateActiveLink('portafolio')}>
                {t('navbar.portafolio')}
              </Nav.Link>
            </Nav>
            <span className='navbar-text'>
              <HashLink to='#contacto'>
                <button className='vvd'>
                  <span>{t('navbar.contacto')}</span>
                </button>
              </HashLink>
              <div className='social-icon'>
                <a
                  href='https://www.linkedin.com/in/eugenio-pello/'
                  rel='noreferrer'
                  target='_blank'>
                  <img alt='Linkedin Icon' src={Linkedin} />
                </a>
                <a
                  href='https://www.instagram.com/eugepello/?hl=es-la'
                  rel='noreferrer'
                  target='_blank'>
                  <img alt='Instagram Icon' src={Instagram} />
                </a>
                <a href='https://github.com/Eugepello' rel='noreferrer' target='_blank'>
                  <img alt='Github Icon' src={Github} />
                </a>
              </div>
              <span onClick={changeToSpanish} className='languageContainer' id='spanish'><img src={Spain} alt='Bandera de España' className='language' /></span>
              <span onClick={changeToEnglish} className='languageContainer'><img src={Usa} alt='Bandera de Estados Unidos' className='language' /></span>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </BrowserRouter>
  );
};

export default NavBar;
