import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "react-toastify/ReactToastify.css"
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stew Bin – Smart Waste Management & Recycling Solutions",
  description:
    "Stew Bin is an advanced waste management platform offering smart bins, recycling solutions, and eco-friendly services to help communities and businesses reduce waste efficiently.",
  icons: {
    icon: "/logo.png",
  }
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
        <ToastContainer
          position="top-right"
        />
        <Navbar />
        <main className="pt-16" >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
