import nodemailer from "nodemailer";
import { ContactFormData } from "../types";
import { fetchGithubData } from "./fetchData";

export const sendEmail = async (
  subject: string,
  html: string,
  email: string | null = null
) => {
  try {
    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.MY_EMAIL_ADDRESS,
      replyTo: email ? email : process.env.MY_EMAIL_ADDRESS,
      subject,
      html,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error(`Error sending email: ${error}`);
  }
};

export const sendEmailContactForm = async (formData: ContactFormData) => {
  try {
    const { firstName, lastName, email, phone, subject, message } = formData;
    await sendEmail(
      `New message from ${firstName} ${lastName ? lastName : ""} - ${subject}`,
      `
      <p>Hello there,</p>
    
      <p>🎉 <strong>Good news!</strong> You've received a message:</p>
    
      <ul>
        <li><strong>Name:</strong> ${firstName} ${lastName ? lastName : ""}</li>
        <li><strong>Email:</strong> ${email}</li>
        ${phone ? `<li><strong>Phone:</strong> ${phone}</li>` : ""}
      </ul>
    
      <p><strong>Subject:</strong> ${subject}</p>
    
      <hr style="margin: 20px 0 30px; max-width: 500px; border: 1px solid #000;">

      <p><strong>Message:</strong></p>
      <p>${message}</p>

      <hr style="margin: 20px 0 30px; max-width: 500px; border: 1px solid #000;">
    
      <p><em>P.S. Another happy visitor for your portfolio! 🌟</em></p>
      `,
      email
    );
  } catch (error) {
    throw new Error(`Error sending contact form email: ${error}`);
  }
};

/** Function to send email about cache refresh and GitHub rate limit status */
export const sendEmailCacheAndRateLimit = async (prop: string) => {
  try {
    const rateLimitData = await fetchGithubData<{
      rate: { limit: number; used: number; remaining: number; reset: number };
    }>("/rate_limit");

    let emailContent = `
    <h2>Cache ${prop} Refreshed & GitHub Rate Limit Status</h2>

    <h3>Cache Refreshed Details:</h3>
    <p>The following cache data has been refreshed:</p>
      <ul>`;

    emailContent +=
      prop === "A"
        ? `<li>Total Repositories</li>
        <li>Total Technologies</li>`
        : `<li>Total Commits</li>`;

    emailContent += `</ul>
    <hr style="margin: 20px 0 30px; max-width: 500px; border: 1px solid #000;">

    <h3>GitHub Rate Limit Status:</h3>
    <p><strong>Used:</strong> ${rateLimitData.rate.used}</p>
    <p><strong>Remaining:</strong> ${rateLimitData.rate.remaining}</p>
    <p><strong>Rate Limit:</strong> ${rateLimitData.rate.limit}</p>
    <p><strong>Resets at:</strong> ${new Date(
      rateLimitData.rate.reset * 1000
    ).toLocaleTimeString()}</p>
    <hr style="margin: 20px 0 30px; max-width: 500px; border: 1px solid #000;">
    
    <p><em>This email was sent to notify you about the cache refresh and the current GitHub API rate limit status.</em></p>
  `;

    await sendEmail("Cache Refreshed & GitHub Rate Limit Status", emailContent);
  } catch (error) {
    throw new Error(`Error sending cache and rate limit email: ${error}`);
  }
};
