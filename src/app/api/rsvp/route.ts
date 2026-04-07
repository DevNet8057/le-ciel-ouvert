import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Même schéma que le formulaire côté client
const rsvpSchema = z.object({
  prenom: z.string().min(2),
  nom: z.string().min(2),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().optional(),
  presence: z.enum(["oui", "non"]),
  personnes: z.coerce.number().min(1).max(10),
  message: z.string().max(500).optional(),
});

export async function POST(request: NextRequest) {
  try {
    // 1. Lire le body de la requête
    const body = await request.json();
    console.log("📨 RSVP reçu:", body);

    // 2. Valider les données avec Zod (sécurité côté serveur)
    const data = rsvpSchema.parse(body);

    const presenceText =
      data.presence === "oui"
        ? `✅ OUI — ${data.personnes} personne${data.personnes > 1 ? "s" : ""}`
        : "❌ NON — ne pourra pas venir";

    // 3. Email reçu par les mariés
    console.log("📤 Envoi email aux mariés...");
    await resend.emails.send({
      from: "RSVP Mariage <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL!],
      subject: `💍 RSVP — ${data.prenom} ${data.nom}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; padding: 32px; background: #FDFAF5; border-radius: 12px;">
          <h1 style="color: #152038; font-size: 24px; margin-bottom: 4px;">Nouvelle réponse RSVP</h1>
          <p style="color: #C9A227; font-size: 14px; margin-top: 0; letter-spacing: 0.1em;">ANGE ESTHER & ELVIS DIRANE — 16 MAI 2026</p>
          <hr style="border: none; border-top: 1px solid #C9A227; margin: 24px 0;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6B7E99; font-size: 13px; width: 140px;">Prénom & Nom</td>
              <td style="padding: 8px 0; color: #152038; font-weight: bold;">${data.prenom} ${data.nom}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6B7E99; font-size: 13px;">Présence</td>
              <td style="padding: 8px 0; color: #152038;">${presenceText}</td>
            </tr>
            ${
              data.email
                ? `
            <tr>
              <td style="padding: 8px 0; color: #6B7E99; font-size: 13px;">Email</td>
              <td style="padding: 8px 0; color: #152038;">${data.email}</td>
            </tr>`
                : ""
            }
            ${
              data.phone
                ? `
            <tr>
              <td style="padding: 8px 0; color: #6B7E99; font-size: 13px;">Téléphone</td>
              <td style="padding: 8px 0; color: #152038;">${data.phone}</td>
            </tr>`
                : ""
            }
            ${
              data.message
                ? `
            <tr>
              <td style="padding: 8px 0; color: #6B7E99; font-size: 13px; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; color: #152038; font-style: italic;">"${data.message}"</td>
            </tr>`
                : ""
            }
          </table>

          <hr style="border: none; border-top: 1px solid #EEF7FF; margin: 24px 0;" />
          <p style="color: #9BAEC8; font-size: 12px; text-align: center;">Le Ciel Ouvert — Site de mariage</p>
        </div>
      `,
    });
    console.log("✅ Email envoyé aux mariés");

    // 4. Email de confirmation envoyé à l'invité (si il a donné son email)
    if (data.email && data.email.length > 0) {
      console.log(`📤 Envoi confirmation à ${data.email}...`);
      await resend.emails.send({
        from: "Ange Esther & Elvis Dirane <onboarding@resend.dev>",
        to: [data.email],
        subject: "💍 Votre réponse a bien été enregistrée",
        html: `
          <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; padding: 32px; background: #FDFAF5; border-radius: 12px; text-align: center;">
            <h1 style="color: #152038; font-size: 28px;">Merci, ${data.prenom} !</h1>
            <p style="color: #C9A227; letter-spacing: 0.1em; font-size: 13px;">LE CIEL OUVERT — 16 MAI 2026</p>
            <hr style="border: none; border-top: 1px solid #C9A227; width: 80px; margin: 24px auto;" />
            ${
              data.presence === "oui"
                ? `<p style="color: #3D4F68; font-size: 18px; line-height: 1.7;">
                  Votre présence a bien été confirmée pour <strong>${data.personnes} personne${data.personnes > 1 ? "s" : ""}</strong>.<br/>
                  Nous vous attendons avec beaucoup de joie !
                </p>`
                : `<p style="color: #3D4F68; font-size: 18px; line-height: 1.7;">
                  Nous avons bien noté votre absence.<br/>
                  Vous serez dans nos pensées ce jour béni.
                </p>`
            }
            <p style="color: #9BAEC8; font-size: 13px; margin-top: 32px;">
              « La femme n'est pas sans l'homme, ni l'homme sans la femme, dans le Seigneur. »<br/>
              <em style="font-size: 11px;">1 Corinthiens 11:11</em>
            </p>
          </div>
        `,
      });
      console.log(`✅ Confirmation envoyée à ${data.email}`);
    }

    // 5. Répondre au client que tout s'est bien passé
    return NextResponse.json(
      { success: true, message: "RSVP enregistré avec succès!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("❌ Erreur RSVP:", error);
    const errorMessage =
      error instanceof z.ZodError
        ? `Validation error: ${error.issues.map((e) => e.message).join(", ")}`
        : error instanceof Error
          ? error.message
          : "Erreur inconnue";

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 400 },
    );
  }
}
