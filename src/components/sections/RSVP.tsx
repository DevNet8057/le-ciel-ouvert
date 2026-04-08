"use client";
import DecorativeCross from "@/components/ui/DecorativeCross";
import GoldButton from "@/components/ui/GoldButton";
import SectionTitle from "@/components/ui/SectionTitle";
import ConfettiCelebration from "@/components/ui/ConfettiCelebration";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

/* ── Schéma de validation ── */
const rsvpSchema = z.object({
  prenom: z.string().min(2, "Prénom requis (min. 2 caractères)"),
  nom: z.string().min(2, "Nom requis (min. 2 caractères)"),
  email: z
    .string()
    .email("Adresse email invalide")
    .optional()
    .or(z.literal("")),
  phone: z.string().optional(),
  presence: z.enum(["oui", "non"]),
  personnes: z.number().min(1).max(10),
  message: z.string().max(500, "Maximum 500 caractères").optional(),
});

type RSVPFormData = z.infer<typeof rsvpSchema>;

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: { personnes: 1, presence: "oui" },
  });

  // @ts-ignore - React Hook Form watch() API incompatible with React Compiler
  const presence = watch("presence") as "oui" | "non" | undefined;

  const inputClass = `
    w-full border-b-2 border-[#C9A84E]/50 bg-transparent py-3
    font-cormorant text-lg text-[#2a1f0e]
    focus:outline-none focus:border-[#8a6a08]
    transition-colors duration-300
    placeholder:text-[#b8a88a]
  `;

  const selectClass = `
    w-full border-b-2 border-[#C9A84E]/50 bg-white py-3
    font-cormorant text-lg text-[#2a1f0e]
    focus:outline-none focus:border-[#8a6a08]
    transition-colors duration-300
    cursor-pointer
  `;

  const onSubmit = async (data: RSVPFormData) => {
    setIsLoading(true);
    try {
      console.log("📧 Envoi RSVP:", data);
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Erreur serveur");
      }

      setSubmitted(true);
      setShowConfetti(true);
      console.log("✅ RSVP envoyé avec succès!");
    } catch (error) {
      console.error("❌ Erreur RSVP:", error);
      alert("Une erreur est survenue lors de l'envoi. Merci de réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="rsvp"
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      {showConfetti && <ConfettiCelebration />}
      {/* Petites décorations */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <svg
          className="absolute top-12 left-8 opacity-[0.04] w-24"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M20 4V36M4 20H36"
            stroke="#8a6a08"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="20" cy="20" r="4" stroke="#8a6a08" strokeWidth="1" />
        </svg>
        <svg
          className="absolute top-32 right-12 opacity-[0.03] w-16"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M20 4V36M4 20H36"
            stroke="#8a6a08"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="20" cy="20" r="4" stroke="#8a6a08" strokeWidth="1" />
        </svg>
        <svg
          className="absolute bottom-24 left-16 opacity-[0.03] w-12"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M20 4V36M4 20H36"
            stroke="#8a6a08"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="20" cy="20" r="4" stroke="#8a6a08" strokeWidth="1" />
        </svg>
        <svg
          className="absolute bottom-12 right-8 opacity-[0.04] w-20"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M20 4V36M4 20H36"
            stroke="#8a6a08"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="20" cy="20" r="4" stroke="#8a6a08" strokeWidth="1" />
        </svg>
        <span className="absolute top-1/4 right-1/4 font-cinzel text-[#8a6a08]/[0.025] text-[100px] font-bold select-none">
          ✦
        </span>
        <span className="absolute bottom-1/3 left-1/5 font-cinzel text-[#8a6a08]/[0.02] text-[60px] font-bold select-none">
          ✦
        </span>
      </div>
      <div className="max-w-2xl mx-auto px-6">
        <SectionTitle
          pretitle="Votre Réponse"
          title="RSVP"
          subtitle="Confirmez votre présence avant le 1er Mai 2026"
        />

        {submitted ? (
          /* ── Message succès ── */
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center glass-card rounded-3xl p-12 border border-[#8a6a08]/20"
          >
            <div className="flex justify-center mb-6">
              <DecorativeCross
                size={60}
                color="#8a6a08"
                opacity={0.9}
                animated
              />
            </div>
            <h3 className="font-cinzel text-[#2a1f0e] text-2xl font-bold mb-4">
              Merci !
            </h3>
            <p className="font-cormorant text-[#5a4a2e] text-xl italic leading-relaxed">
              Votre réponse a bien été enregistrée.
              <br />
              Nous vous attendons avec beaucoup de joie !
            </p>
            <div className="gold-divider mt-8" />
          </motion.div>
        ) : (
          /* ── Formulaire ── */
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12 border border-white/80 relative"
          >
            {/* Croix décoratives */}
            <div
              className="absolute top-5 left-5 opacity-15"
              aria-hidden="true"
            >
              <DecorativeCross size={22} color="#8a6a08" />
            </div>
            <div
              className="absolute top-5 right-5 opacity-15"
              aria-hidden="true"
            >
              <DecorativeCross size={22} color="#8a6a08" />
            </div>

            <div className="space-y-7">
              {/* Prénom & Nom */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                <div>
                  <label
                    htmlFor="prenom"
                    className="font-inter text-xs uppercase tracking-widest text-[#8a7a5e] block mb-2"
                  >
                    Prénom *
                  </label>
                  <input
                    id="prenom"
                    {...register("prenom")}
                    className={inputClass}
                    placeholder="Votre prénom"
                    autoComplete="given-name"
                  />
                  {errors.prenom && (
                    <p className="text-red-400 text-xs mt-1.5">
                      {errors.prenom.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="nom"
                    className="font-inter text-xs uppercase tracking-widest text-[#8a7a5e] block mb-2"
                  >
                    Nom *
                  </label>
                  <input
                    id="nom"
                    {...register("nom")}
                    className={inputClass}
                    placeholder="Votre nom"
                    autoComplete="family-name"
                  />
                  {errors.nom && (
                    <p className="text-red-400 text-xs mt-1.5">
                      {errors.nom.message}
                    </p>
                  )}
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeInUp}>
                <label
                  htmlFor="email"
                  className="font-inter text-xs uppercase tracking-widest text-[#8a7a5e] block mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  {...register("email")}
                  type="email"
                  className={inputClass}
                  placeholder="votre@email.com (optionnel)"
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1.5">
                    {errors.email.message}
                  </p>
                )}
              </motion.div>

              {/* Téléphone */}
              <motion.div variants={fadeInUp}>
                <label
                  htmlFor="phone"
                  className="font-inter text-xs uppercase tracking-widest text-[#8a7a5e] block mb-2"
                >
                  Téléphone
                </label>
                <input
                  id="phone"
                  {...register("phone")}
                  type="tel"
                  className={inputClass}
                  placeholder="+237 6xx xxx xxx (optionnel)"
                  autoComplete="tel"
                />
              </motion.div>

              {/* Présence */}
              <motion.div variants={fadeInUp}>
                <p className="font-inter text-xs uppercase tracking-widest text-[#8a7a5e] block mb-4">
                  Serez-vous présent(e) ? *
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "oui", label: "✓  Oui, avec joie !" },
                    { value: "non", label: "✗  Je ne pourrai pas" },
                  ].map(({ value, label }) => (
                    <label
                      key={value}
                      className={`text-center py-3.5 rounded-full border-2 cursor-pointer font-inter text-sm transition-all duration-200 ${
                        presence === value
                          ? "border-[#8a6a08] bg-[#8a6a08]/10 text-[#8a6a08]"
                          : "border-[#C9A84E]/40 text-[#5a4a2e] hover:border-[#C9A84E]"
                      }`}
                    >
                      <input
                        {...register("presence")}
                        type="radio"
                        value={value}
                        className="sr-only"
                      />
                      {label}
                    </label>
                  ))}
                </div>
                {errors.presence && (
                  <p className="text-red-400 text-xs mt-2">
                    {errors.presence.message}
                  </p>
                )}
              </motion.div>

              {/* Nombre de personnes */}
              <motion.div variants={fadeInUp}>
                <label
                  htmlFor="personnes"
                  className="font-inter text-xs uppercase tracking-widest text-[#8a7a5e] block mb-2"
                >
                  👥 Nombre de personnes
                </label>
                <select
                  id="personnes"
                  {...register("personnes", { valueAsNumber: true })}
                  className={selectClass}
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      {n} personne{n > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeInUp}>
                <label
                  htmlFor="message"
                  className="font-inter text-xs uppercase tracking-widest text-[#8a7a5e] block mb-2"
                >
                  Message aux mariés
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={3}
                  className={`${inputClass} resize-none`}
                  placeholder="Un vœu, une bénédiction, un mot d'amour..."
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1.5">
                    {errors.message.message}
                  </p>
                )}
              </motion.div>

              {/* Submit */}
              <motion.div variants={fadeInUp} className="pt-2">
                <GoldButton
                  type="submit"
                  disabled={isLoading}
                  size="lg"
                  className="w-full"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg
                        className="animate-spin w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="white"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="white"
                          d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z"
                        />
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    "Envoyer ma confirmation"
                  )}
                </GoldButton>
              </motion.div>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
