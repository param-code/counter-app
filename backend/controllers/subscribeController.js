
const nodemailer = require('nodemailer');
const Newsletters = require('../models/Newsletters'); 
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

    const existingSubscription = await Newsletters.findOne({ email });
    if (existingSubscription) {
      return res.status(400).json({ message: 'This email is already subscribed.' });
    }

    // Step 2: Save the new subscription to the database
    const newSubscription = new Newsletters({ email });
    await newSubscription.save();

    const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: email,
        subject: 'Subscription Confirmation',
        html: `
          <h1>Thank you for subscribing!</h1>
          <p>You have successfully subscribed to our platform.</p>
          <p>Stay tuned for updates and exclusive offers!</p>
          <a href="https://github.com/Yashgabani845/hiring-portal" 
               style="display: inline-block; padding: 10px 20px; margin-top: 20px; color: white; background-color: #007BFF; text-decoration: none; border-radius: 5px;">
              Explore More
            </a>
            <p style="margin-top: 30px;">Best Regards,<br>Hiring Portal</p>
        `,
      };
  
      await transporter.sendMail(mailOptions);
  
      res.status(200).json({ message: 'Subscription successful. Confirmation email sent.' });
    } catch (error) {
      console.error('Subscription error:', error);
      res.status(500).json({ message: 'Subscription failed.' });
    }
}