"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  console.log(senderEmail);

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ydlvns@gmail.com",
      subject: "Message from contact form",
      text: message as string,
      reply_to: senderEmail as string,
    });
  } catch (error) {}
};
