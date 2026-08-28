import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAFIBRA Maroc | Emballages et palettes bois",
  description:
    "MAFIBRA fabrique des emballages bois et palettes pour l'export agricole et l'industrie au Maroc, avec traçabilité, réactivité et engagement durable."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
