import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import { FormTypes, StatusForm } from './types';
import { useTranslation } from 'react-i18next';

interface FormState {
  formDetails: FormTypes;
  status: StatusForm;
}

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

const Contacto = () => {
  const { t } = useTranslation();
  const [formDetails, setFormDetails] = useState<FormState['formDetails']>(INITIAL_STATE);
  const [status, setStatus] = useState<FormState['status']>();
  const [buttonText, setButtonText] = useState<string>('Enviar');

  const onFormUpdate = (category: string, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setButtonText('Enviando...');
    let response = await fetch('http://localhost:5173/contacto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formDetails),
    });

    setButtonText(t('contacto.send'));
    let result = await response.json();

    setFormDetails(formDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Mensaje enviado correctamente.' });
    } else {
      setStatus({
        success: false,
        message: 'Algo salió mal, intentalo más tarde.',
      });
    }
  };

  return (
    <section className='contact' id='contacto'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6} size={12}>
            <img
              alt='Contactate'
              src='https://res.cloudinary.com/eugepello/image/upload/v1668108479/correo-de-contacto_n1bnea.png'
            />
          </Col>
          <Col md={6} size={12}>
            <div className='animate__animated animate__slideInUp'>
              <h2>{t('contacto.title')}</h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col className='px-1' size={12} sm={6}>
                    <input
                      placeholder={t('contacto.form.name')}
                      type='text'
                      value={formDetails.firstName}
                      onChange={(e) => onFormUpdate('firstName', e.target.value)}
                    />
                  </Col>
                  <Col className='px-1' size={12} sm={6}>
                    <input
                      placeholder={t('contacto.form.lastName')}
                      type='text'
                      value={formDetails.lastName}
                      onChange={(e) => onFormUpdate('lastName', e.target.value)}
                    />
                  </Col>
                  <Col className='px-1' size={12} sm={6}>
                    <input
                      placeholder={t('contacto.form.email')}
                      type='email'
                      value={formDetails.email}
                      onChange={(e) => onFormUpdate('email', e.target.value)}
                    />
                  </Col>
                  <Col className='px-1' size={12} sm={6}>
                    <input
                      placeholder={t('contacto.form.phone')}
                      type='tel'
                      value={formDetails.phone}
                      onChange={(e) => onFormUpdate('phone', e.target.value)}
                    />
                  </Col>
                  <Col className='px-1' size={12}>
                    <textarea
                      placeholder={t('contacto.form.message')}
                      rows={6}
                      value={formDetails.message}
                      onChange={(e) => onFormUpdate('message', e.target.value)}
                    />
                    <button type='submit'>
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                  {
                    status?.message && (
                      <Col>
                        <p className={status.success === false ? 'danger' : 'success'}>
                          {status.message}
                        </p>
                      </Col>
                    )
                  }
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contacto;
