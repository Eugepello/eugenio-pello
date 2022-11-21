import { useState, useEffect, SetStateAction } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/img/logo-e.png';
import Linkedin from '../assets/img/linkedin-in.svg';
import Instagram from '../assets/img/instagram.svg';
import Github from '../assets/img/github.svg';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);

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
                Home
              </Nav.Link>
              <Nav.Link
                className={activeLink === 'habilidades' ? 'active navbar-link' : 'navbar-link'}
                href='#habilidades'
                onClick={() => onUpdateActiveLink('habilidades')}>
                Habilidades
              </Nav.Link>
              <Nav.Link
                className={activeLink === 'portafolio' ? 'active navbar-link' : 'navbar-link'}
                href='#portafolio'
                onClick={() => onUpdateActiveLink('portafolio')}>
                Portafolio
              </Nav.Link>
            </Nav>
            <span className='navbar-text'>
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
              <HashLink to='#contacto'>
                <button className='vvd'>
                  <span>Contacto</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </BrowserRouter>
  );
};

export default NavBar;
