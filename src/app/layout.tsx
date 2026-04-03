import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

/* ── Polices ── */
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

/* ── SEO Metadata ── */
export const metadata: Metadata = {
  metadataBase: new URL("https://le-ciel-ouvert.vercel.app"),
  title: "Ange Esther & Elvis Dirane — Le Ciel Ouvert | 16 Mai 2026",
  description:
    'Rejoignez-nous pour célébrer notre union bénie par Dieu. Mariage chrétien "Le Ciel Ouvert" le 16 Mai 2026 à Yaoundé, Cameroun.',
  keywords: [
    "mariage",
    "wedding",
    "Yaoundé",
    "Cameroun",
    "chrétien",
    "Ange Esther",
    "Elvis Dirane",
    "Le Ciel Ouvert",
  ],
  openGraph: {
    title: "Ange Esther & Elvis Dirane — Le Ciel Ouvert",
    description:
      "Célébrons ensemble notre union bénie. 16 Mai 2026 — Yaoundé, Cameroun.",
    images: [
      {
        url: "/images/couple/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Ange Esther & Elvis Dirane",
      },
    ],
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ange Esther & Elvis Dirane — Mariage 16 Mai 2026",
    description: 'Mariage chrétien "Le Ciel Ouvert" à Yaoundé, Cameroun.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${cinzel.variable} ${cormorant.variable} ${inter.variable}`}
    >
      <body className="font-inter bg-[#FDFCFA] text-[#4A5568] antialiased">
        {children}
      </body>
    </html>
  );
}
