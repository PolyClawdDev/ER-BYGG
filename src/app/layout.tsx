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
  metadataBase: new URL("https://erbygg.xyz"),
  title: "E&R BYGG AS | Håndverkere & Byggefirma i Oslo",
  description:
    "E&R BYGG AS er et profesjonelt byggefirma i Oslo med over 270 fullførte prosjekter. Vi utfører totalrenovering, snekkerarbeid, gulvlegging, baderomsoppussing og mye mer – alltid med høy kvalitet og pålitelig levering. Be om gratis befaring i dag.",
  keywords: [
    "byggefirma Oslo",
    "snekker Oslo",
    "renovering Oslo",
    "totalrenovering Oslo",
    "gulvlegging Oslo",
    "baderomsoppussing Oslo",
    "håndverker Oslo",
    "oppussing Oslo",
    "tømrer Oslo",
    "E&R BYGG AS",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "E&R BYGG AS | Håndverkere & Byggefirma i Oslo",
    description:
      "Over 270 fullførte prosjekter og 4.9 i kundetilfredshet. Vi leverer totalrenovering, snekkerarbeid og premium byggeprosjekter i Oslo. Kontakt oss for gratis befaring.",
    type: "website",
    locale: "nb_NO",
    url: "https://erbygg.xyz",
    siteName: "E&R BYGG AS",
    images: [{ url: "/icon.png", width: 512, height: 512, alt: "E&R BYGG AS" }],
  },
  twitter: {
    card: "summary",
    title: "E&R BYGG AS | Byggefirma i Oslo",
    description:
      "Profesjonelt byggefirma i Oslo. Totalrenovering, snekkerarbeid og gulvlegging med over 270 fornøyde kunder.",
    images: ["/icon.png"],
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
