
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // Or your preferred email service
  auth: {
    user: process.env.SMTP_EMAIL, // Your email address
    pass: process.env.SMTP_PASSWORD, // Your email password or app-specific password
  },
});
exports.subscribe = async (req, res) => {
    const { email} = req.body;
  
    try {
      const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: email,
        subject: 'Subscription Confirmation',
        html: `
          <h1>Thank you for subscribing!</h1>
          <p>You have successfully subscribed to our platform.</p>
          <p>Stay tuned for updates and exclusive offers!</p>
        `,
      };
  
      await transporter.sendMail(mailOptions);
  
      res.status(200).json({ message: 'Subscription successful. Confirmation email sent.' });
    } catch (error) {
      console.error('Subscription error:', error);
      res.status(500).json({ message: 'Subscription failed.' });
    }
}