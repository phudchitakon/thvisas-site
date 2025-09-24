import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
