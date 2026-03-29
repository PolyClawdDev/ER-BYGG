import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingCallButton } from "@/components/floating-call-button";
import { PageLoader } from "@/components/page-loader";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "E&R BYGG AS | Byggefirma i Oslo",
  description:
    "E&R BYGG AS leverer totalrenovering, snekkerarbeid og premium byggeprosjekter i Oslo. Be om gratis befaring i dag.",
  keywords: ["byggefirma Oslo", "snekker Oslo", "renovering Oslo", "totalrenovering", "gulvlegging"],
  openGraph: {
    title: "E&R BYGG AS",
    description: "Kvalitet i hver detalj. Bygg som varer.",
    type: "website",
    locale: "nb_NO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={`${display.variable} ${sans.variable} bg-obsidian font-sans text-white antialiased`}>
        <PageLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
