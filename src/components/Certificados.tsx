import { Row, Col, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ReactCertif from '../assets/img/react.png';
import JavascriptCertif from '../assets/img/javascript.png';
import DesarrolloCertif from '../assets/img/desarrollo-web.png';

const Certificados = () => {
  const { t } = useTranslation();

  return (
    <Row className='certifContainer'>
      <h1 className='certifTitle'>{t('certificados.title')}</h1>

      <Col xl={4} lg={6} xs={12}>
        <a href='https://www.coderhouse.com/certificados/6338ac0adece68000e716a2f' rel='noreferrer' target='_blank' className='linkCertif'>
          <Container className='cardGiratoria'>
            <div className='cardGiratoria-container'>
              <div className='cardGiratoria-container--frente'>
                <img src={ReactCertif} alt='Certificado de React JS' className='logoCertif' />
              </div>
              <div className='cardGiratoria-container--trasera'>
                <img src={ReactCertif} alt='Certificado de React JS' className='logoCertif' />
                <h3>⚛️ React JS</h3>
                <p>{t('certificados.subtitleCard')}</p>
              </div>
            </div>
          </Container>
        </a>
      </Col>

      <Col xl={4} lg={6} xs={12}>
        <a href='https://www.coderhouse.com/certificados/62dee16892f7980019bae98d' rel='noreferrer' target='_blank' className='linkCertif'>
          <Container className='cardGiratoria'>
            <div className='cardGiratoria-container'>
              <div className='cardGiratoria-container--frente'>
                <img src={JavascriptCertif} alt='Certificado de JavaScript' className='logoCertif' />
              </div>
              <div className='cardGiratoria-container--trasera'>
                <img src={JavascriptCertif} alt='Certificado de JavaScript' className='logoCertif' />
                <h3>🟨 JavaScript</h3>
                <p>{t('certificados.subtitleCard')}</p>
              </div>
            </div>
          </Container>
        </a>
      </Col>

      <Col xl={4} lg={6} xs={12}>
        <a href='https://www.coderhouse.com/certificados/628ae6c7ec21f10024e7c6c0' rel='noreferrer' target='_blank' className='linkCertif'>
          <Container className='cardGiratoria'>
            <div className='cardGiratoria-container'>
              <div className='cardGiratoria-container--frente'>
                <img src={DesarrolloCertif} alt='Certificado de Desarrollo Web' className='logoCertif' />
              </div>
              <div className='cardGiratoria-container--trasera'>
                <img src={DesarrolloCertif} alt='Certificado de Desarrollo Web' className='logoCertif' />
                <h3>💻 Desarrollo Web</h3>
                <p>{t('certificados.subtitleCard')}</p>
              </div>
            </div>
          </Container>
        </a>
      </Col>
    </Row>
  );
};

export default Certificados;