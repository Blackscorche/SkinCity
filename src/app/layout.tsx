import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkinCity — Beauty, unfiltered.",
  description: "Skin-first beauty essentials for your everyday.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
