import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bench Aeron Casin | Full Stack Developer & Networking",
  description:
    "Portfolio of Bench Aeron Casin — Full Stack Developer and Networking student from De La Salle University–Dasmariñas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
