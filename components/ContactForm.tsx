"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";

const projectTypes = [
  "Complete Home",
  "Apartment",
  "Villa",
  "Kitchen",
  "Wardrobe",
  "Residential Interior",
  "Office",
  "Retail",
  "Restaurant",
  "Commercial Interior",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

const inputClasses =
  "w-full border-b border-ink/20 bg-transparent py-3 text-ink placeholder:text-ink/40 focus:border-ember focus:outline-none";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-lg border border-brass/30 bg-warm p-8 text-center"
      >
        <p className="font-display text-xl font-semibold uppercase text-ink">
          Thank you.
        </p>
        <p className="mt-3 text-ink/60">
          Our team will get in touch with you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className={`grid grid-cols-1 gap-8 ${compact ? "" : "sm:grid-cols-2"}`}>
        <input
          required
          name="name"
          placeholder="Name"
          autoComplete="name"
          className={inputClasses}
        />
        <input
          required
          name="phone"
          placeholder="Phone"
          type="tel"
          autoComplete="tel"
          className={inputClasses}
        />
        <input
          required
          name="email"
          placeholder="Email"
          type="email"
          autoComplete="email"
          className={inputClasses}
        />
        <input
          name="location"
          placeholder="Location"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor={compact ? "projectTypeCompact" : "projectType"} className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-ink/50">
          Project Type
        </label>
        <select
          id={compact ? "projectTypeCompact" : "projectType"}
          name="projectType"
          required
          defaultValue=""
          className={`${inputClasses} appearance-none`}
        >
          <option value="" disabled>
            Select project type
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <textarea
        name="message"
        placeholder="Tell us about your project"
        rows={compact ? 3 : 4}
        className={`${inputClasses} resize-none`}
      />

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again, or call us directly.
        </p>
      )}

      <MagneticButton type="submit" variant="solid" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Request a Consultation"}
      </MagneticButton>
    </form>
  );
}
