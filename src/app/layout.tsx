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
      </body>
    </html>
  );
}
