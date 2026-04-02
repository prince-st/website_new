import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = (supabaseUrl && supabaseKey) 
  ? createClient(supabaseUrl, supabaseKey) 
  : null;

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/submit-contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Insert into Supabase if configured
  if (supabase) {
    try {
      console.log('Attempting to insert into Supabase table: contact_submissions');
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([{ name, email, message }]);

      if (dbError) {
        console.error('Supabase insert error:', dbError);
      } else {
        console.log('Successfully inserted into Supabase');
      }
    } catch (err) {
      console.error('Unexpected Supabase error:', err);
    }
  } else {
    console.warn('Supabase not configured or missing environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_KEY)');
  }

  // Check for environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.error('Missing EMAIL_USER or EMAIL_PASSWORD environment variables');
    return res.status(500).json({ 
      message: 'Server configuration error: Missing email credentials. Please check your .env file.' 
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email, // Send to the user who filled the form
    cc: process.env.EMAIL_USER, // Send a copy to the owner
    subject: 'Thanks for reaching out — let’s connect',
    text: `Hi ${name},

Thank you for reaching out through my website. I’ve successfully received your inquiry and appreciate you taking the time to contact me.

Here’s a copy of the details you shared for reference:
Name: ${name}
Email: ${email}
Message:
${message}

I’ll personally review your request and get back to you within 24 business hours.

👉 If your requirement is time-sensitive, you’re welcome to book a quick call directly using the link below:
📅 Schedule a call: https://calendly.com/piyushewebxpert/30min

This helps us align faster and discuss your goals clearly.

In the meantime, you can explore my work and services here:
https://piyushgunani.com

Looking forward to connecting.

Best regards,

Piyush Gunani
AI Consultant, Developer & Digital Growth Partner
🌐 https://piyushgunani.com
📧 piyushwebexpert@gmail.com
`,
    html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f5; }
  .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.05); }
  .header { background: #0a161e; padding: 32px 20px; text-align: center; }
  .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px; }
  .content { padding: 40px 30px; }
  .message-box { background-color: #f8fafc; border-left: 4px solid #0e272d; padding: 24px; border-radius: 4px; margin: 24px 0; }
  .label { font-weight: bold; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
  .value { margin-bottom: 20px; color: #0a161e; font-size: 16px; }
  .value:last-child { margin-bottom: 0; }
  .button { display: inline-block; background-color: #0e272d; color: #0a161e; padding: 14px 28px; text-decoration: none; border-radius: 50px; font-weight: bold; text-align: center; font-size: 16px; transition: background-color 0.2s; }
  .button:hover { background-color: #2cc9b3; }
  .footer { background-color: #f8fafc; padding: 32px; text-align: center; font-size: 14px; color: #64748b; border-top: 1px solid #e2e8f0; }
  .footer a { color: #0e272d; text-decoration: none; }
  .social-links { margin-top: 16px; }
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <h1>Let's Connect</h1>
  </div>
  <div class="content">
    <p style="font-size: 18px; margin-top: 0;">Hi <strong>${name}</strong>,</p>
    <p>Thank you for reaching out through my website. I’ve received your inquiry and appreciate you taking the time to contact me.</p>
    
    <div class="message-box">
      <div class="label">Name :</div> <div class="value">${name}</div>
      
      <div class="label">Email :</div> <div class="value"><a href="mailto:${email}" style="color: #0a161e; text-decoration: none;">${email}</a></div>
      
      <div class="label">Message :</div> <div class="value" style="white-space: pre-wrap;">${message}</div>
    </div>

    <p>I’ll personally review your request and get back to you within 24 business hours.</p>

    <div style="text-align: center; margin: 36px 0;">
      <p style="margin-bottom: 16px; font-weight: 500;">👉 Time-sensitive? Book a quick call:</p>
      <a href="https://calendly.com/piyushewebxpert/30min" class="button" style="color: #fff;">📅 Schedule a Call</a>
    </div>

    <p style="color: #64748b; font-size: 15px;">This helps us align faster and discuss your goals clearly.</p>
    
    <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 32px 0;">
    
    <p style="margin-bottom: 8px;">In the meantime, you can explore my work:</p>
    <a href="https://piyushgunani.com" style="color: #0e272d; font-weight: 600; text-decoration: none; font-size: 16px;">piyushgunani.com</a>
  </div>
  
  <div class="footer">
    <p style="margin: 0 0 8px; color: #0a161e;"><strong>Piyush Gunani</strong></p>
    <p style="margin: 0;">AI Consultant, Developer & Digital Growth Partner</p>
    <div class="social-links">
      <a href="https://piyushgunani.com">Website</a> • 
      <a href="mailto:piyushwebexpert@gmail.com">Email</a>
    </div>
  </div>
</div>
</body>
</html>
`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to ${email}`);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Error sending email: ' + error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Make sure you have created a .env file with EMAIL_USER and EMAIL_PASS');
});
