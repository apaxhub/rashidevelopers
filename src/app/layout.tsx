import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

// Global Persistent Components
import Navbar from "@/components/home/Navbar";
import FloatingActions from "@/components/home/FloatingActions";
import Footer from "@/components/home/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Rashi Developers - Building Legacies Since 2004",
  description: "Established in 2004, Rashi Developers is a leading property developer in Bangalore, committed to creating residential complexes that offer serenity and comfort.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased font-sans selection:bg-primary selection:text-bg bg-bg min-h-screen relative`}
      >
        <Navbar />
        <FloatingActions />

        {children}

        <Footer />
      </body>
    </html>
  );
}
