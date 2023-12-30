

const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tudireccion@gmail.com',
    pass: 'tucontraseña',
  },
});

export const sendMail = async (to: string, subject: string, msg: string) => {
  try {
    const mailOptions = {
      from: 'tudireccion@gmail.com',
      to,
      subject,
      text: msg,
    };

    await transporter.sendMail(mailOptions);
    console.log('Correo electrónico enviado con éxito.');
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    throw new Error('Error al enviar el correo electrónico.');
  }
};
