import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const bodoni = Bodoni_Moda({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gloss Labs | Premium Auto Detailing | Hamilton NJ",
  description:
    "Hamilton NJ's premier auto detailing shop. In-shop and mobile detailing: interior, exterior, ceramic coating, and paint correction. Visit us at 18 Yorkshire Road or we come to you.",
  keywords:
    "auto detailing, ceramic coating, paint correction, Hamilton NJ, car detailing near me, mobile detailing NJ, in-shop detailing",
  openGraph: {
    title: "Gloss Labs | Premium Auto Detailing",
    description:
      "We don't just detail cars — we elevate them. In-shop and mobile detailing in Hamilton, NJ.",
    url: "https://glosslabsauto.com",
    siteName: "Gloss Labs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodoni.variable} ${jost.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Sticky mobile CTA bar */}
        <div className="mobile-cta-bar">
          <a
            href="tel:+16097318641"
            className="flex-1 flex items-center justify-center gap-2 py-3 border border-accent/30 text-accent font-semibold text-sm rounded-full"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            CALL
          </a>
          <a
            href="/book"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-accent to-accent-light text-white font-bold text-sm rounded-full"
          >
            BOOK NOW
          </a>
        </div>
      </body>
    </html>
  );
}
