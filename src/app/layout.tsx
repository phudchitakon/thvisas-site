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
  title: "Thailand Visa Services - Fast & Reliable Visa Processing",
  description:
    "Get your Thailand visa quickly and easily. Tourist, Business, Education, and Retirement visas. Expert guidance and fast processing.",
  keywords:
    "Thailand visa, tourist visa, business visa, visa application, Thailand travel",
  openGraph: {
    title: "Thailand Visa Services - Fast & Reliable Processing",
    description:
      "Expert Thailand visa services for tourists, business travelers, and expats.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
