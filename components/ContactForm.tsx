"use client";

import { FormEvent, useState } from "react";

const experiences = [
  "Horseback Riding in Tuscany",
  "Farm Animal Visit, Ricotta Making & Tasting",
  "Pici Cooking Class & Dinner",
  "Farm Visit & First Saddle Experience",
  "Horse-Drawn Carriage Ride in Montepulciano",
  "Traditional Ox Cart Ride",
  "Walk with Goats or Donkeys",
];

type SubmissionStatus =
  | { type: "idle"; message: "" }
  | { type: "success" | "error"; message: string };

const fieldClassName =
  "mt-2 min-h-12 w-full border border-[#cbc6b8] bg-[#fbfaf6] px-4 text-base text-[#263126] outline-none transition-colors focus:border-[#263126]";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmissionStatus>({ type: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          experience: formData.get("experience"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Thank you. Your message has been sent.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "We could not send your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="grid gap-6" onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-medium" htmlFor="contact-name">
          Name
          <input
            autoComplete="name"
            className={fieldClassName}
            id="contact-name"
            maxLength={100}
            minLength={2}
            name="name"
            required
            type="text"
          />
        </label>

        <label className="text-sm font-medium" htmlFor="contact-email">
          Email
          <input
            autoComplete="email"
            className={fieldClassName}
            id="contact-email"
            maxLength={254}
            name="email"
            required
            type="email"
          />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-medium" htmlFor="contact-phone">
          Phone / WhatsApp
          <input
            autoComplete="tel"
            className={fieldClassName}
            id="contact-phone"
            maxLength={50}
            name="phone"
            type="tel"
          />
        </label>

        <label className="text-sm font-medium" htmlFor="contact-experience">
          Experience
          <select
            className={fieldClassName}
            defaultValue=""
            id="contact-experience"
            name="experience"
            required
          >
            <option disabled value="">
              Select an experience
            </option>
            {experiences.map((experience) => (
              <option key={experience} value={experience}>
                {experience}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="text-sm font-medium" htmlFor="contact-message">
        Message
        <textarea
          className={`${fieldClassName} min-h-40 resize-y py-3`}
          id="contact-message"
          maxLength={3000}
          minLength={10}
          name="message"
          required
          rows={6}
        />
      </label>

      <div
        aria-hidden="true"
        className="absolute -left-[10000px] top-auto size-px overflow-hidden"
      >
        <label htmlFor="contact-website">Website</label>
        <input
          autoComplete="off"
          id="contact-website"
          name="website"
          tabIndex={-1}
          type="text"
        />
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          className="inline-flex min-h-13 items-center justify-center bg-[#263126] px-7 text-xs font-semibold tracking-[0.18em] text-white transition-colors hover:bg-[#3e4a3d] disabled:cursor-not-allowed disabled:opacity-60"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
        </button>
        <p
          aria-live="polite"
          className={`text-sm leading-6 ${
            status.type === "error" ? "text-[#8b3f32]" : "text-[#4f604d]"
          }`}
          role="status"
        >
          {status.message}
        </p>
      </div>
    </form>
  );
}
