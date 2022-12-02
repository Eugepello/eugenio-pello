import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';
import 'animate.css';

const Contacto = () => {
  const { t } = useTranslation();

  return (
    <section className='contact' id='contacto'>
      <Container>
        <Row className='align-items-center'>
          <Col md={5} size={12}>
            <img
              alt='Contactate'
              src='https://res.cloudinary.com/eugepello/image/upload/v1668108479/correo-de-contacto_n1bnea.png'
            />
          </Col>
          <Col md={7} size={12}>
            <div className='animate__animated animate__slideInUp'>
              <h1>{t('contacto.title')}</h1>
              <ContactForm />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contacto;
