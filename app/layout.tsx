import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const clashDisplay = localFont({
  src: "./../public/fonts/ClashDisplay-Regular.ttf", // public/fonts/
  variable: "--font-clash-display",
});

// Seo Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://ecellrgpv.com/'),
  title: {
    default: "E-Cell RGPV | Entrepreneurship Cell RGPV",
    template: "%s | E-Cell RGPV"
  },
  description: "E-Cell RGPV is the Entrepreneurship Cell of Rajiv Gandhi Proudyogiki Vishwavidyalaya, fostering innovation, entrepreneurship, and startup culture among students through various initiatives, workshops, and networking opportunities.",
  keywords: [
    "E-Cell RGPV",
    "Entrepreneurship Cell RGPV",
    "RGPV Entrepreneurship",
    "Startup Culture",
    "Innovation Hub",
    "Student Entrepreneurship",
    "Campus Outreach Program",
    "Startup Internship",
    "EC-Club",
    "Alumni Entrepreneurship",
    "Business Incubation",
    "Entrepreneurship Development"
  ],
  authors: [{ name: "E-Cell RGPV Team" }],
  creator: "E-Cell RGPV",
  publisher: "E-Cell RGPV",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/assets/logo.png" },
      { url: "/assets/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/assets/logo.png" },
    ],
    shortcut: ["/assets/logo.png"],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ecell-rgpv.com",
    siteName: "E-Cell RGPV",
    title: "E-Cell RGPV | Entrepreneurship Cell RGPV",
    description: "E-Cell RGPV is the Entrepreneurship Cell of Rajiv Gandhi Proudyogiki Vishwavidyalaya, fostering innovation, entrepreneurship, and startup culture among students.",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "E-Cell RGPV Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Cell RGPV | Entrepreneurship Cell RGPV",
    description: "E-Cell RGPV is the Entrepreneurship Cell of Rajiv Gandhi Proudyogiki Vishwavidyalaya, fostering innovation, entrepreneurship, and startup culture among students.",
    images: ["/assets/logo.png"],
    creator: "@ecellrgpv",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${clashDisplay.variable}`}
    >
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
