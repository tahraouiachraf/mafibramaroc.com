import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mafibramaroc.com"),
  title: "MAFIBRA Maroc | Emballages et palettes bois",
  description:
    "MAFIBRA fabrique des emballages bois, palettes industrielles et palox pour l'export agricole et l'industrie au Maroc, avec traçabilité, réactivité et certification NIMP 15.",
  openGraph: {
    title: "MAFIBRA Maroc | Emballages et palettes bois",
    description:
      "Solutions bois pour export agricole, palettes industrielles, palox, marquage personnalisé et conformité NIMP 15.",
    images: ["/mafibramaroc/prod.jpg"],
    locale: "fr_MA",
    siteName: "MAFIBRA Maroc",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "MAFIBRA Maroc | Emballages et palettes bois",
    description:
      "Fabrication d'emballages bois et palettes industrielles pour les professionnels au Maroc."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="bg-background">
      <body>{children}</body>
    </html>
  );
}
