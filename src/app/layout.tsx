import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Susi | Abdul Munir",
  description: "Undangan Pernikahan Susi Samsiah & Abdul Munir",
  openGraph: {
    images: [{
      url: 'https://res.cloudinary.com/dlveexbli/image/upload/v1759795758/Desain_tanpa_judul_5_ydmpxt.png',
      width: 1200,
      height: 630,
      alt: "Susi | Abdul Munir",
      type: 'image/png'
    }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Great+Vibes:wght@400&display=swap"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div className="max-w-md m-0 mx-auto relative bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}
