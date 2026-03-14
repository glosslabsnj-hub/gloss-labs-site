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
    "Hamilton NJ's premier auto detailing shop. Interior, exterior, ceramic coating, and paint correction. Visit us at 18 Yorkshire Road.",
  keywords:
    "auto detailing, ceramic coating, paint correction, Hamilton NJ, car detailing near me, in-shop detailing, premium detailing NJ",
  openGraph: {
    title: "Gloss Labs | Premium Auto Detailing",
    description:
      "We don't just detail cars, we elevate them. Premium in-shop detailing in Hamilton, NJ.",
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
      <head>
        {/* Google Ads conversion tracking */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17970313271" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17970313271');

              // Track phone call clicks as conversions
              document.addEventListener('click', function(e) {
                var link = e.target.closest('a[href^="tel:"]');
                if (link) {
                  gtag('event', 'conversion', {
                    send_to: 'AW-17970313271',
                    value: 200.0,
                    currency: 'USD'
                  });
                }
              });
            `,
          }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo-icon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "Gloss Labs",
              image: "https://glosslabsauto.com/logo.svg",
              url: "https://glosslabsauto.com",
              telephone: "+16099449705",
              email: "glosslabsnj@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "18 Yorkshire Road",
                addressLocality: "Hamilton",
                addressRegion: "NJ",
                postalCode: "08610",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.1963,
                longitude: -74.6824,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "35",
              },
              priceRange: "$75 - $999",
              description:
                "Premium auto detailing in Hamilton, NJ. Interior detail, exterior wash, ceramic coating, and paint correction.",
              areaServed: {
                "@type": "State",
                name: "New Jersey",
              },
            }),
          }}
        />
      </head>
      <body className={`${bodoni.variable} ${jost.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Sticky mobile CTA bar */}
        <div className="mobile-cta-bar">
          <a
            href="tel:+16099449705"
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
