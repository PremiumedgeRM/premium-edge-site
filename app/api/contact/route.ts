import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { firstName, lastName, email, phone, projectType, message } = data;

    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json({ 
        success: false,
        message: 'Missing required fields' 
      }, { status: 400 });
    }

    console.log('Creating email transporter...');
    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    console.log('Setting up email content...');
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'premiumedgecurbing@gmail.com',
      subject: `New Quote Request from ${firstName} ${lastName}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    console.log('Attempting to send email...');
    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    return NextResponse.json({ 
      success: true,
      message: 'Email sent successfully' 
    }, { status: 200 });
  } catch (error) {
    console.error('Detailed error sending email:', error);
    return NextResponse.json({ 
      success: false,
      message: 'Failed to send email',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 