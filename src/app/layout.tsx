import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gloss Labs | Premium Mobile Auto Detailing | Hamilton NJ",
  description:
    "Hamilton NJ's premier mobile auto detailing service. Interior, exterior, ceramic coating, and paint correction. We come to you. Book online today.",
  keywords:
    "auto detailing, mobile detailing, ceramic coating, paint correction, Hamilton NJ, Trenton NJ, car detailing near me",
  openGraph: {
    title: "Gloss Labs | Premium Mobile Auto Detailing",
    description:
      "We don't just detail cars — we elevate them. Premium mobile detailing in Hamilton, NJ.",
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
      <body className={`${geistSans.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
