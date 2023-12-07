import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar, StickyCta } from "@/components";

export const metadata: Metadata = {
  title: "Gazella Group - Software Development",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
