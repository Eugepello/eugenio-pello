import { resources, defaultNS } from "./i18n";
import 'react-i18next';

interface CardTypes {
  title: string,
  description: string,
  imgUrl: string,
  url: string;
}

interface NewsletterTypes {
  status: string | null,
  message: React.ReactHTMLElement,
  onValidated: (formData: EmailFormFields) => void,
}

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources['en'];
  };
};