import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

// const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const fromPassword = process.env.EMAIL_PASSWORD;
const toEmail = process.env.TO_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: fromEmail,
        pass: fromPassword,
      },
    });

    const info = transporter.sendMail({
      from: fromEmail,
      to: [toEmail, email],
      subject: subject,
      html: `
        <p>Thank you for contacting me!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
        <p>${email}</p>
    `,
    });
    console.log("Email sent");
    return NextResponse.json(info);
  } catch (error) {
    console.error("Error sending email: ", error);
    return NextResponse.json({ error });
  }
}

// export async function POST(req, res) {
//   const { email, subject, message } = await req.json();
//   console.log(email, subject, message);
//   try {
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: [fromEmail, 'omar.100.days@gmail.com'],
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank you for contacting us!</p>
//           <p>New message submitted:</p>
//           <p>{message}</p>
//         </>
//       ),
//     });
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }
