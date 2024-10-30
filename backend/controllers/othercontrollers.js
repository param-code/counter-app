const nodemailer = require('nodemailer');

exports.sendFeedbackEmail = async (req, res) => {
  const { name, email, message, rating } = req.body;  // Capture rating from the request
  console.log("Sending email with the following details:", { name, email, message, rating });
  // Ensure all required fields are provided
  if (!name || !email || !message || rating === undefined) {
    console.log("Sending email with the following details 2:", { name, email, message, rating });
    return res.status(400).json({ success: false, message: 'All fields including rating are required' });
  }

  try {
    console.log("Sending email with the following details 3:", { name, email, message, rating });
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Generate stars for rating
    const totalStars = 5;
    const filledStars = '★'.repeat(rating);  // Filled stars based on rating
    const emptyStars = '☆'.repeat(totalStars - rating); // Empty stars for the rest
    const starDisplay = `<p style="font-size: 24px; color: #FFD700;">${filledStars}${emptyStars}</p>`;

    const mailOptions = {
      from: `"${name}" <${email}>`,  // Display sender's name and email
      to: process.env.MAIL,  // Make sure RESPONSE_MAIL is set in the .env
      subject: `Feedback from ${name}`,
      text: message,
      html: `
        <p>You have received a new message from the Feedback form:</p>
        <h3>Contact Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        <h3>Message:</h3>
        <p>${message}</p>
        <h3>Rating:</h3>
        ${starDisplay} <!-- Display the stars with filled and empty stars -->
      `, // HTML formatted message body with rating stars
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success if email is sent
    return res.status(200).json({ success: true, message: 'Feedback sent successfully!' });
  } catch (error) {
    console.error('Error sending feedback email:', error);
    return res.status(500).json({ success: false, message: 'Error sending feedback email' });
  }
};
