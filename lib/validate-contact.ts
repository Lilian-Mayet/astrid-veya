export type CureChoice = "revelation" | "signature" | "residence" | "unsure";

export const cureChoices: { value: CureChoice; label: string }[] = [
  { value: "revelation", label: "Révélation" },
  { value: "signature", label: "Signature" },
  { value: "residence", label: "Résidence" },
  { value: "unsure", label: "Je ne sais pas encore" },
];

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  cure: CureChoice;
  message: string;
  consent: boolean;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Validation partagée client/serveur — même règles des deux côtés. */
export function validateContact(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Merci d'indiquer votre nom.";
  }

  if (!data.email.trim()) {
    errors.email = "Merci d'indiquer votre email.";
  } else if (!EMAIL_RE.test(data.email.trim())) {
    errors.email = "Cette adresse email n'est pas valide.";
  }

  if (!data.message.trim()) {
    errors.message = "Merci de décrire votre besoin.";
  }

  if (!data.consent) {
    errors.consent = "Merci d'autoriser VEYA à vous recontacter.";
  }

  return errors;
}
