const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'tarunjeet4829.be23@chitkara.edu.in',
    pass: 'elxq tsmo onpw vevr',
  },
});

app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  const mailOptions = {
    from: 'tarunjeet4829.be23@chitkara.edu.in',
    to: email,
    subject: 'Welcome to DEV@Deakin!',
    text: 'Thank you for subscribing to DEV@Deakin! We are excited to have you with us.',
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Subscription successful');
  } catch (error) {
    res.status(500).send('Error sending email');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
