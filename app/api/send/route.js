import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import axios from "axios";
import { RateLimiterMemory } from "rate-limiter-flexible";
import DOMPurify from "isomorphic-dompurify";

const fromEmail = process.env.FROM_EMAIL;
const fromPassword = process.env.EMAIL_PASSWORD;
const toEmail = process.env.TO_EMAIL;
const secretKey = process.env.RECAPTCHA_SECRET_KEY;

const rateLimiter = new RateLimiterMemory({
  points: 5,
  duration: 60,
});

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for") || req.ip;

  try {
    await rateLimiter.consume(ip);
  } catch (rateLimitError) {
    console.log(`Rate limit exceeded for IP: ${ip}`);
    return NextResponse.json(
      { error: "Too many requests, please try again later." },
      { status: 429 }
    );
  }

  try {
    const { email, subject, message, captchaToken } = await req.json();

    // Verify reCAPTCHA
    try {
      const recaptchaResponse = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`
      );
      if (!recaptchaResponse.data.success) {
        return NextResponse.json(
          { error: "reCAPTCHA verification failed" },
          { status: 400 }
        );
      }
    } catch (error) {
      console.error("reCAPTCHA verification error:", error);
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    const sanitizedEmail = DOMPurify.sanitize(email);
    const sanitizedSubject = DOMPurify.sanitize(subject);
    const sanitizedMessage = DOMPurify.sanitize(message);

    const mailMessage = {
      from: fromEmail,
      to: [toEmail, sanitizedEmail],
      subject: sanitizedSubject,
      html: `
        <p>Thank you for contacting me!</p>
        <p>New message submitted:</p>
        <p>${sanitizedMessage}</p>
        <p>${sanitizedEmail}</p>
    `,
    };

    // using nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: fromEmail,
        pass: fromPassword,
      },
    });

    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (error) {
          console.log(`Transporter verification error: ${error}`);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    try {
      const info = await new Promise((resolve, reject) => {
        transporter.sendMail(mailMessage, (err, info) => {
          if (err) {
            console.error("Email sending error:", err);
            reject(err);
          } else {
            console.log(info);
            resolve(info);
            console.log("Email sent successfully:", info);
          }
        });
      });

      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      {
        error: "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}
