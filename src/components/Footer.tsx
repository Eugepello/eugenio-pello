import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../assets/img/logo-e.png';
import Linkedin from '../assets/img/linkedin-in.svg';
import Instagram from '../assets/img/instagram.svg';
import Github from '../assets/img/github.svg';
import MailchimpForm from './MailchimpForm';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img alt="Logo" id="logoBottom" src={Logo} />
          </Col>
          <Col className="text-center text-sm-end" size={12} sm={6}>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/eugenio-pello/" rel="noreferrer" target="_blank">
                <img alt="Linkedin Icon" src={Linkedin} />
              </a>
              <a
                href="https://www.instagram.com/eugepello/?hl=es-la"
                rel="noreferrer"
                target="_blank"
              >
                <img alt="Instagram Icon" src={Instagram} />
              </a>
              <a href="https://github.com/Eugepello" rel="noreferrer" target="_blank">
                <img alt="Github Icon" src={Github} />
              </a>
            </div>
            <p>
              {t('footer')}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
