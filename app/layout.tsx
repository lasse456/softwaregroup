import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, StickyCta, Nav, Cta } from "@/components";

export const metadata: Metadata = {
  title: "Gazella Team | Modern day software",
  description: "We build innovative software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StickyCta />
        <Nav />
        {children}
        <Cta />
        <Footer />
      </body>
    </html>
  );
}
