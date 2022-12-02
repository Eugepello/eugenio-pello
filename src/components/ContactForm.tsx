import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'react-bootstrap';

const ContactForm = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);
  if (state.succeeded) {
    return <h2 className='contactThanks'>{t<string>('contacto.thanks')}</h2>;
  }
  return (
    <form onSubmit={handleSubmit} action={import.meta.env.VITE_FORMSPREE_LINK} method='POST'>
      <Row>
        <Col className='px-1' size={12} sm={6}>
          <input
            placeholder={t<string>('contacto.form.name')}
            id="name"
            type="text"
            name="Name"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />
        </Col>

        <Col className='px-1' size={12} sm={6}>
          <input
            placeholder={t<string>('contacto.form.lastName')}
            id="lastName"
            type="text"
            name="Last Name"
          />
          <ValidationError
            prefix="Last Name"
            field="lastName"
            errors={state.errors}
          />
        </Col>

        <label htmlFor="email"></label>
        <Col className='px-1' size={12} sm={6}>
          <input
            placeholder={t<string>('contacto.form.email')}
            id="email"
            type="email"
            name="Email"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </Col>

        <Col className='px-1' size={12} sm={6}>
          <input
            placeholder={t<string>('contacto.form.phone')}
            id="phone"
            type="phone number"
            name="Phone"
          />
          <ValidationError
            prefix="Phone"
            field="phone"
            errors={state.errors}
          />
        </Col>

        <Col className='px-1' size={12}>
          <textarea
            placeholder={t<string>('contacto.form.message')}
            id="message"
            name="Message"
            rows={6}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <br />
          <button type="submit" disabled={state.submitting}>
            {t<string>('contacto.send')}
          </button>
        </Col>
      </Row>
    </form>
  );
};

export default ContactForm;