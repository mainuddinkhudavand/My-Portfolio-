import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static frontend assets built by Vite
app.use(express.static(path.join(__dirname, 'dist')));

// ============================================================================
// 1. MONGODB ATLAS CONNECTION & MODEL
// ============================================================================
const MONGODB_URI = process.env.MONGODB_URI;

if (MONGODB_URI) {
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log('🍃 Successfully connected to MongoDB Atlas!'))
    .catch((err) => console.error('❌ MongoDB Connection Error:', err.message));
} else {
  console.warn('⚠️ MONGODB_URI is not defined in .env file.');
}

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, default: '' },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: 'unread' }
});

const ContactMessage = mongoose.model('ContactMessage', contactSchema);

// ============================================================================
// 2. API ENDPOINTS
// ============================================================================

// Submit Contact Form (Saves to MongoDB + Sends Email if SMTP_PASS is configured)
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please fill in all required fields.' });
    }

    // 1. Save to MongoDB Atlas silently in background
    let savedDoc = null;
    try {
      savedDoc = await ContactMessage.create({ name, email, subject, message });
      console.log(`📥 Contact message saved to MongoDB Atlas! (Doc ID: ${savedDoc._id})`);
    } catch (dbErr) {
      console.error('❌ Failed to save to MongoDB:', dbErr.message);
    }

    // 2. Send via Nodemailer SMTP if configured
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, RECEIVER_EMAIL } = process.env;
    const isSmtpConfigured = SMTP_PASS && SMTP_PASS !== 'YOUR_GMAIL_APP_PASSWORD_HERE';

    let emailSent = false;

    if (isSmtpConfigured) {
      try {
        const transporter = nodemailer.createTransport({
          host: SMTP_HOST || 'smtp.gmail.com',
          port: Number(SMTP_PORT) || 587,
          secure: Number(SMTP_PORT) === 465,
          auth: {
            user: SMTP_USER || 'mainuddinkhudavand@gmail.com',
            pass: SMTP_PASS
          }
        });

        const mailOptions = {
          from: `"${name} (Portfolio Inquiry)" <${SMTP_USER}>`,
          replyTo: email,
          to: RECEIVER_EMAIL || 'mainuddinkhudavand@gmail.com',
          subject: `Portfolio Contact from ${name}: ${subject || 'General Inquiry'}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #e0e0e0; border-radius: 8px;">
              <h2 style="color: #06b6d4; border-bottom: 2px solid #06b6d4; padding-bottom: 8px;">New Portfolio Contact</h2>
              <p><strong>Sender Name:</strong> ${name}</p>
              <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
              ${savedDoc ? `<p><strong>MongoDB Record ID:</strong> <code>${savedDoc._id}</code></p>` : ''}
              <hr style="border: 0; border-top: 1px solid #eee; margin: 16px 0;" />
              <h3 style="color: #4f46e5;">Message:</h3>
              <p style="background: #f8fafc; padding: 14px; border-radius: 6px; white-space: pre-wrap; font-size: 14px; color: #1e293b;">${message}</p>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 16px 0;" />
              <p style="font-size: 11px; color: #64748b;">Saved in MongoDB & delivered to your inbox.</p>
            </div>
          `
        };

        await transporter.sendMail(mailOptions);
        emailSent = true;
        console.log(`✅ Email delivered to ${RECEIVER_EMAIL}!`);
      } catch (mailErr) {
        console.error('❌ SMTP Email Delivery Failed:', mailErr.message);
      }
    } else {
      console.log('⚠️ Message saved to MongoDB Atlas. (Set SMTP_PASS in .env to also receive Gmail copy)');
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. Mainuddin will get back to you soon.'
    });
  } catch (error) {
    console.error('API Contact Error:', error);
    return res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

// View all messages stored in MongoDB (Admin Endpoint)
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: messages.length, messages });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// SPA Fallback for all non-API GET requests (Express 4 & 5 / Node 24 compatible)
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    return res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  }
  next();
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio Server running on http://localhost:${PORT}`);
});
