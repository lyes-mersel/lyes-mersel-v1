import { sendEmailContactForm } from "@/lib/api/sendEmails";
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

    sendEmailContactForm({
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
    });

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
