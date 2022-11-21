import { useState, useEffect } from 'react';
import { Col, Row, Alert } from 'react-bootstrap';
import { NewsletterTypes } from './types';

const Newsletter = ({ status, message, onValidated }: NewsletterTypes) => {
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    status === 'success' && clearFields();
  }, [status]);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    email &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={12}>
      <div className='newsletter-bx slideInUp'>
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Suscribite a mi Newsletter
              <br />
              para no perderte las últimas novedades
            </h3>
            {status === 'enviando' && <Alert>Enviando...</Alert>}
            {status === 'error' && <Alert variant='danger'>Error</Alert>}
            {status === 'success' && <Alert variant='success'>{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className='new-email-bx'>
                <input
                  placeholder='Email...'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type='submit'>Enviar</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Newsletter;