import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe';
import Newsletter from './Newsletter';

const MailchimpForm = () => {
  const postUrl = `${import.meta.env.VITE_MAILCHIMP_URL}?u=${import.meta.env.VITE_MAILCHIMP_U}&id=${import.meta.env.VITE_MAILCHIMP_ID}`;

  return (
    <>
      <MailchimpSubscribe
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData: EmailFormFields) => subscribe(formData)}
          />
        )}
        url={postUrl}
      />
    </>
  );
};

export default MailchimpForm;
