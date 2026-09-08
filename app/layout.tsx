import type { Metadata } from "next";
import { EB_Garamond, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const serif = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://interiordesign-web.vercel.app"),
  title: "Interior Studio - Interior Architecture",
  description:
    "The art of feeling at home. Interior is an independent interior architecture studio creating considered residences, spaces and bespoke objects.",
  keywords: [
    "interior design",
    "interior architecture",
    "luxury residences",
    "Interior Studio",
  ],
  openGraph: {
    title: "Interior - The art of feeling at home",
    description:
      "Independent interior architecture. Considered spaces, honest materials and a lasting sense of belonging.",
    url: "/",
    siteName: "Interior Studio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Interior Studio - refined contemporary interior design",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior - The art of feeling at home",
    description:
      "Independent interior architecture. Considered spaces and honest materials.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
