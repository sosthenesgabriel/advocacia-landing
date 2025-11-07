import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Advocacia Imperatriz & Associados — Defesa jurídica estratégica",
  description:
    "Escritório boutique em Imperatriz–MA. Direito Cível, Trabalhista, Família e Empresarial. Atendimento humano e técnico. Resposta em até 2h úteis.",
  openGraph: {
    title: "Advocacia Imperatriz & Associados",
    description:
      "Direito Cível, Trabalhista, Família e Empresarial em Imperatriz–MA. Resposta em até 2h úteis.",
    url: "https://advocacia-landing.vercel.app",
    type: "website",
  },
  metadataBase: new URL("https://advocacia-landing.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-neutral-950 text-neutral-100 antialiased">{children}</body>
    </html>
  );
}
