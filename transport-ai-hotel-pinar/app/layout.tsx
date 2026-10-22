import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hotel Boutique Pinar | Asistente virtual — Demo Transport AI",
  description:
    "Demostración conceptual de un asistente virtual para resolver dudas de huéspedes y facilitar el contacto con Hotel Boutique Pinar.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
