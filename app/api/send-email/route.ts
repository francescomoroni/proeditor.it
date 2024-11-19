import dotenv from 'dotenv';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'postmaster@proeditors.it',
      // to: 'info@proeditors.it',
      subject: `Nuovo messaggio da ${name}`,
      html: `
        <h2>Nuovo messaggio dal form di contatto</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${phone}</p>
        <p><strong>Messaggio:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    return NextResponse.json({ error: 'Errore nell\'invio dell\'email' }, { status: 500 });
  }
} 