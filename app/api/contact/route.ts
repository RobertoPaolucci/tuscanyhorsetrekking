import nodemailer from "nodemailer";

export const runtime = "nodejs";

const experienceNames = new Set([
  "Horseback Riding in Tuscany",
  "Farm Animal Visit, Ricotta Making & Tasting",
  "Pici Cooking Class & Dinner",
  "Farm Visit & First Saddle Experience",
  "Horse-Drawn Carriage Ride in Montepulciano",
  "Traditional Ox Cart Ride",
  "Walk with Goats or Donkeys",
]);

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  experience: string;
  message: string;
  website: string;
};

const genericError = { message: "Unable to send your message. Please try again later." };

function readString(value: unknown): string | null {
  return typeof value === "string" ? value.trim() : null;
}

function parsePayload(value: unknown): ContactPayload | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }

  const record = value as Record<string, unknown>;
  const name = readString(record.name);
  const email = readString(record.email);
  const phone = readString(record.phone);
  const experience = readString(record.experience);
  const message = readString(record.message);
  const website = readString(record.website);

  if (
    name === null ||
    email === null ||
    phone === null ||
    experience === null ||
    message === null ||
    website === null
  ) {
    return null;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    name.length < 2 ||
    name.length > 100 ||
    email.length < 5 ||
    email.length > 254 ||
    !emailPattern.test(email) ||
    phone.length > 50 ||
    !experienceNames.has(experience) ||
    message.length < 10 ||
    message.length > 3000 ||
    website.length > 200
  ) {
    return null;
  }

  return { name, email, phone, experience, message, website };
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? "0");

  if (Number.isFinite(contentLength) && contentLength > 10_000) {
    return Response.json(genericError, { status: 400 });
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(genericError, { status: 400 });
  }

  const payload = parsePayload(body);

  if (!payload) {
    return Response.json(genericError, { status: 400 });
  }

  if (payload.website) {
    return Response.json({ message: "Message sent." });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_TO_EMAIL } =
    process.env;
  const port = Number(SMTP_PORT);

  if (
    !SMTP_HOST ||
    !SMTP_PORT ||
    !SMTP_USER ||
    !SMTP_PASSWORD ||
    !CONTACT_TO_EMAIL ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535
  ) {
    return Response.json(genericError, { status: 500 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: SMTP_USER,
      to: CONTACT_TO_EMAIL,
      replyTo: payload.email,
      subject: `Tuscany Horse Trekking enquiry: ${payload.experience}`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone / WhatsApp: ${payload.phone || "Not provided"}`,
        `Experience: ${payload.experience}`,
        "",
        "Message:",
        payload.message,
      ].join("\n"),
    });

    return Response.json({ message: "Message sent." });
  } catch (error: unknown) {
    console.error("Contact email delivery failed.", error);
    return Response.json(genericError, { status: 500 });
  }
}
