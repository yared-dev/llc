const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'mail.communityinterestconnection.com',
  port: 465,
  secure: true,
  auth: {
    user: 'info@communityinterestconnection.com',
    pass: 'tu-contraseña'
  }
});

const enviarCorreo = async (nombre: string, correo: string, asunto: string, texto: string) => {
  try {
    const info = await transporter.sendMail({
      from: 'info@communityinterestconnection.com',
      to: 'tucorreogmail@gmail.com',
      subject: asunto,
      text: `Nuevo Mensaje de:\nFrom: ${nombre} (${correo})\nSubject: ${asunto}\nTexto: ${texto}`
    });

    console.log('Correo enviado:', info.response);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
};

export default enviarCorreo;
