"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const sendEmail = formData.get("email");
  const message = formData.get("message");

  if (!message || typeof message !== "string") {
    return {
      error: "Invalid message",
    };
  }

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "ydlvns@gmail.com",
    subject: "Message from contact form",
    text: "Hello world!",
    reply_to: senderEmail,
  });
};
