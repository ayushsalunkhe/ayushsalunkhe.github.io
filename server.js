import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter for emails with detailed configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // true for port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  debug: true, // Enable debug logging
  logger: true // Enable built-in logger
});

// Verify transporter configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP configuration error:', error);
    console.error('Current configuration:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.EMAIL_USER,
      // Don't log the password for security
    });
  } else {
    console.log('Server is ready to send emails:', success);
  }
});

// Contact form endpoint with enhanced error handling
app.post('/api/contact', async (req, res) => {
  try {
    console.log('Received contact form submission:', {
      ...req.body,
      email: '***' // Hide email for privacy in logs
    });

    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      console.warn('Missing required fields:', {
        name: !name,
        email: !email,
        message: !message
      });
      return res.status(400).json({ 
        error: 'All fields are required',
        details: {
          name: !name ? 'Name is required' : null,
          email: !email ? 'Email is required' : null,
          message: !message ? 'Message is required' : null
        }
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.warn('Invalid email format:', email);
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Email options with enhanced HTML template
    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #6d28d9;">New Contact Form Submission</h2>
          <div style="margin: 20px 0; padding: 15px; background-color: #f8f8f8; border-radius: 4px;">
            <p style="margin: 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="margin: 10px 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This message was sent from your portfolio contact form.</p>
        </div>
      `,
      // Add text version for better deliverability
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    };

    console.log('Attempting to send email...');

    // Send email with detailed error handling
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Message sent successfully:', {
        messageId: info.messageId,
        response: info.response
      });
      
      res.status(200).json({ 
        message: 'Message sent successfully!',
        messageId: info.messageId
      });
    } catch (emailError) {
      console.error('Email sending error:', {
        error: emailError,
        stack: emailError.stack,
        code: emailError.code,
        command: emailError.command
      });
      
      res.status(500).json({ 
        error: 'Failed to send email',
        details: emailError.message
      });
    }

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error.message
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Email configuration:', {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.EMAIL_USER
  });
});