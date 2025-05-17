const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your.email@gmail.com',
    pass: 'your-email-password'
  }
});

async function sendEmail({ userId, message }) {
  await transporter.sendMail({
    from: 'your.email@gmail.com',
    to: 'recipient@example.com',
    subject: 'Notification',
    text: message
  });
  console.log(`Email sent to ${userId}`);
}

module.exports = { sendEmail };
