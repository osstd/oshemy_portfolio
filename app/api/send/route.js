import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";

// declaration for using Resend API
// const resend = new Resend(process.env.RESEND_API_KEY);

// using nodemailer
const fromEmail = process.env.FROM_EMAIL;
const fromPassword = process.env.EMAIL_PASSWORD;
const toEmail = process.env.TO_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();

  const mailMessage = {
    from: fromEmail,
    to: [toEmail, email],
    subject: subject,
    html: `
        <p>Thank you for contacting me!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
        <p>${email}</p>
    `,
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: fromEmail,
      pass: fromPassword,
    },
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(`There is an error here:${error}`);
        reject(error);
        return NextResponse.json(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  try {
    const info = await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailMessage, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
          return NextResponse.json(err);
        } else {
          console.log(info);
          resolve(info);
          console.log("Email sent, server side.");
          return NextResponse.json(info);
        }
      });
    });
    return NextResponse.json(res);
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "An error occurred while sending the email.",
    });
  }
}

// Block for using Resend API
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
