import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";

import Navigation from "@/components/organisms/navigation";
import Footer from "@/components/template/footer";

import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LFConnect",
  description: "Leapfrog Connect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} antialiased min-h-screen text-green-400 font-sans bg-dark-green`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
