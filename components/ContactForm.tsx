"use client";

import { useState } from "react";
import {
  cureChoices,
  validateContact,
  type ContactFormData,
  type ContactFormErrors,
} from "@/lib/validate-contact";

const initialData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  cure: "unsure",
  message: "",
  consent: false,
};

const inputClass =
  "w-full border-0 border-b border-border bg-transparent py-3 font-sans text-base text-foreground outline-none transition-colors focus:border-foreground";
const labelClass = "micro-label mb-2 block";

export function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  function update<K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const clientErrors = validateContact(data);
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length > 0) return;

    setStatus("submitting");
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        setData(initialData);
        return;
      }

      const body = await res.json().catch(() => null);
      if (body?.errors) {
        setErrors(body.errors);
        setStatus("idle");
      } else {
        setServerError(body?.error ?? "L'envoi a échoué. Merci de réessayer.");
        setStatus("error");
      }
    } catch {
      setServerError("L'envoi a échoué. Vérifiez votre connexion et réessayez.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-border-strong px-8 py-12 text-center">
        <p className="font-serif text-2xl italic">Votre message a bien été transmis.</p>
        <p className="mt-4 font-sans text-sm text-foreground-muted">
          Un interlocuteur dédié vous répond sous 24 heures.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="micro-label mt-8 border border-border-strong px-6 py-3 transition-colors hover:border-foreground"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Nom
          </label>
          <input
            id="name"
            className={inputClass}
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-xs text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={inputClass}
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">
            Téléphone
          </label>
          <input
            id="phone"
            type="tel"
            className={inputClass}
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="address">
            Adresse / quartier du bien
          </label>
          <input
            id="address"
            className={inputClass}
            value={data.address}
            onChange={(e) => update("address", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="cure">
          Cure souhaitée
        </label>
        <select
          id="cure"
          className={`${inputClass} appearance-none`}
          value={data.cure}
          onChange={(e) => update("cure", e.target.value as ContactFormData["cure"])}
        >
          {cureChoices.map((c) => (
            <option key={c.value} value={c.value} className="bg-background">
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={inputClass}
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-foreground-muted">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 shrink-0 border border-border-strong bg-transparent"
            checked={data.consent}
            onChange={(e) => update("consent", e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          Autoriser VEYA à me recontacter afin d&apos;échanger sur les besoins de ma résidence.
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-2 text-xs text-red-400">
            {errors.consent}
          </p>
        )}
      </div>

      {status === "error" && serverError && (
        <p role="alert" className="text-sm text-red-400">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="micro-label self-start border border-border-strong px-8 py-4 text-foreground transition-colors hover:border-foreground disabled:opacity-50"
      >
        {status === "submitting" ? "Envoi en cours…" : "Confier mon projet"}
      </button>
    </form>
  );
}
