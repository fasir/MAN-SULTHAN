import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MAN SULTHAN | Premium Lifestyle Store",
  description:
    "Discover premium perfumes, watches, cooling glasses, mobiles, laptops and clocks at MAN SULTHAN. Shop luxury products at unbeatable prices.",
  keywords:
    "perfume, watches, cooling glasses, sunglasses, mobile accessories, laptop accessories, clocks, premium, luxury, MAN SULTHAN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakartaSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
