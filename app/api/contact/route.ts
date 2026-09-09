import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  cureChoices,
  validateContact,
  type ContactFormData,
} from "@/lib/validate-contact";

export async function POST(request: Request) {
  let data: ContactFormData;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const errors = validateContact(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const contactEmail = process.env.CONTACT_EMAIL;
  if (!process.env.RESEND_API_KEY || !contactEmail) {
    console.error("RESEND_API_KEY ou CONTACT_EMAIL manquant dans l'environnement.");
    return NextResponse.json(
      { error: "Le service d'envoi n'est pas configuré." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const cureLabel =
    cureChoices.find((c) => c.value === data.cure)?.label ?? "Je ne sais pas encore";

  try {
    await resend.emails.send({
      from: "VEYA — Site <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: data.email,
      subject: `Nouvelle demande — ${data.name}`,
      text: [
        `Nom : ${data.name}`,
        `Email : ${data.email}`,
        `Téléphone : ${data.phone || "—"}`,
        `Adresse / quartier du bien : ${data.address || "—"}`,
        `Cure souhaitée : ${cureLabel}`,
        "",
        "Message :",
        data.message,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Échec de l'envoi via Resend :", error);
    return NextResponse.json(
      { error: "L'envoi a échoué. Merci de réessayer." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
