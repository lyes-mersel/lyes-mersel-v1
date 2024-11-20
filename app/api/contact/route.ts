import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, subject, message } =
      await req.json();

    // Validate if all required fields are filled
    if (!firstName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please fill all the required fields" },
        { status: 400 }
      );
    }

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.MY_EMAIL_ADDRESS,
      subject: `New message from ${firstName} ${
        lastName ? lastName : ""
      } - ${subject}`,
      text: `You have a new message from ${firstName} ${
        lastName ? lastName : ""
      } ( ${email} ${phone ? `, ${phone}` : ""} )\n\nMessage:\n\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json(
      { error: "Error sending message" },
      { status: 500 }
    );
  }
}
