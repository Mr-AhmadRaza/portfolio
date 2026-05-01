import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create nodemailer transporter
    // For production, use environment variables for credentials
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or use 'smtp.gmail.com' with port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Email to you (the portfolio owner)
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL || "iahmad6raza@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Confirmation email to the sender
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for reaching out!",
      html: `
        <h2>Thank you for your message, ${name}!</h2>
        <p>I've received your message and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <blockquote>${message.replace(/\n/g, "<br>")}</blockquote>
        <p>Best regards,<br>Ahmad Raza</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}