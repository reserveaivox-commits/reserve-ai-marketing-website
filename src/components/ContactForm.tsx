"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact_page");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: String(formData.get("firstName") ?? "").trim(),
      lastName: String(formData.get("lastName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      businessType: String(formData.get("businessType") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="firstName"
          type="text"
          placeholder={t("fname")}
          required
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-[#8effa8]/40 focus:bg-white/[0.07] focus:ring-2 focus:ring-[#8effa8]/15"
        />
        <input
          name="lastName"
          type="text"
          placeholder={t("lname")}
          required
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-[#8effa8]/40 focus:bg-white/[0.07] focus:ring-2 focus:ring-[#8effa8]/15"
        />
      </div>
      <input
        name="email"
        type="email"
        placeholder={t("email")}
        required
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-[#8effa8]/40 focus:bg-white/[0.07] focus:ring-2 focus:ring-[#8effa8]/15"
      />
      <input
        name="phone"
        type="tel"
        placeholder={t("phone")}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-[#8effa8]/40 focus:bg-white/[0.07] focus:ring-2 focus:ring-[#8effa8]/15"
      />
      <select
        name="businessType"
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-zinc-300 outline-none transition-colors focus:border-[#8effa8]/40 focus:bg-white/[0.07] focus:ring-2 focus:ring-[#8effa8]/15"
      >
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
        name="message"
        placeholder={t("message")}
        required
        rows={4}
        className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-[#8effa8]/40 focus:bg-white/[0.07] focus:ring-2 focus:ring-[#8effa8]/15"
      />
      <button
        type="submit"
        disabled={status !== "idle"}
        className="w-full rounded-full bg-[#8effa8] px-6 py-3 font-semibold text-[#05101d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9dffb2] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "sending"
          ? "..."
          : status === "sent"
          ? "✓"
          : t("btn_send")}
      </button>
      {status === "sent" ? (
        <p className="text-center text-sm text-[#8effa8]">
          Message saved and sent to your contact inbox.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-center text-sm text-red-300">
          Message could not be sent. Please try again.
        </p>
      ) : null}
      <p className="text-center text-xs text-zinc-500">{t("privacy")}</p>
    </form>
  );
}
