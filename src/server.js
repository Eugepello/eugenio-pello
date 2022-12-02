import cors from 'cors';
import express, { Router, json } from 'express';
const app = express();
import { createTransport } from 'nodemailer';
const router = Router();
const port = import.meta.env.VITE_PORT || 5173;

app.use(cors());
app.use(json());
app.use('/', router);
app.listen(port, () => console.log(`Servidor corriendo en ${port}`));

const contactEmail = createTransport({
  service: 'gmail',
  auth: {
    user: 'eugepello@gmail.com',
    pass: 'dwvlouojllylmykw',
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Listo para enviar');
  }
});

router.post('/contacto', (req, res) => {
  const name = req.body.firstName + ' ' + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: 'eugepello@gmail.com',
    subject: 'Formulario de Contacto - Portafolio',
    html: `<p>Nombre: ${name}</p>
            <p>Email: ${email}</p>
            <p>Teléfono: ${phone}</p>
            <p>Mensaje: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: 'Mensaje enviado' });
    }
  });
});
