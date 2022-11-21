import React from 'react';

export interface FormTypes {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  message: string,
}

interface StatusForm {
  success: boolean;
  message: string;
}

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