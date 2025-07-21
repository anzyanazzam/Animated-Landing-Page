import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MPK - Majelis Perwakilan Kelas | Dari Pelajar, Oleh Pelajar, Untuk Pelajar",
  description: "Website resmi MPK (Majelis Perwakilan Kelas). Bersama menyuarakan aspirasi demi kelas yang lebih baik. Bergabunglah dengan organisasi yang mengutamakan kepentingan pelajar.",
  keywords: ["MPK", "Majelis Perwakilan Kelas", "organisasi pelajar", "aspirasi", "sekolah", "pendidikan"],
  authors: [{ name: "MPK Organization" }],
  creator: "MPK Organization",
  publisher: "MPK Organization",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mpk-organization.com'),
  openGraph: {
    title: "MPK - Majelis Perwakilan Kelas",
    description: "Bersama menyuarakan aspirasi demi kelas yang lebih baik. Dari pelajar, oleh pelajar, untuk pelajar.",
    url: "https://mpk-organization.com",
    siteName: "MPK Organization",
    images: [
      {
        url: "/images/logo1.png",
        width: 1200,
        height: 630,
        alt: "MPK Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MPK - Majelis Perwakilan Kelas",
    description: "Bersama menyuarakan aspirasi demi kelas yang lebih baik.",
    images: ["/images/logo1.png"],
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo1.png" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="MPK" />
      </head>
      <body className={`${inter.className} antialiased bg-gray-900 text-white`}>
        {children}
      </body>
    </html>
  );
}