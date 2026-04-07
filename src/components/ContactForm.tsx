"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact_page");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Simulated submission
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3000);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder={t("fname")}
          required
          className="form-input w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 outline-none"
        />
        <input
          type="text"
          placeholder={t("lname")}
          required
          className="form-input w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 outline-none"
        />
      </div>
      <input
        type="email"
        placeholder={t("email")}
        required
        className="form-input w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 outline-none"
      />
      <input
        type="tel"
        placeholder={t("phone")}
        className="form-input w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 outline-none"
      />
      <select className="form-input w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 outline-none text-zinc-500">
        <option value="">{t("btype")}</option>
        <option value="restaurant">Restaurant</option>
        <option value="salon">Salon</option>
        <option value="barbershop">Barbershop</option>
        <option value="tattoo">Tattoo Studio</option>
        <option value="spa">Spa</option>
        <option value="nail">Nagelstudio</option>
        <option value="wellness">Wellness</option>
        <option value="other">Andere</option>
      </select>
      <textarea
        placeholder={t("message")}
        required
        rows={4}
        className="form-input w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 outline-none resize-none"
      />
      <button
        type="submit"
        disabled={status !== "idle"}
        className="btn-primary w-full bg-accent-purple text-white font-semibold py-3 rounded-lg hover:bg-accent-purple-dark disabled:opacity-50 transition-colors"
      >
        {status === "sending"
          ? "..."
          : status === "sent"
          ? "✓"
          : t("btn_send")}
      </button>
      <p className="text-xs text-zinc-400 text-center">{t("privacy")}</p>
    </form>
  );
}
