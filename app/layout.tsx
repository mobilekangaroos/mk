import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smartphone, Tablets, Laptop & Computer Repair | Mobilekangaroo",
  description:
    "Mobile Kangaroo offers expert phone, tablet, and computer repair services. Trusted Apple Authorized Service Provider. Fast, reliable, and affordable tech fixes!",
  keywords:
    "smartphone repair, tablet repair services, mobilekangaroo, computer repair service provider, laptop repair",
  alternates: {
    canonical: "https://www.mobilekangaroo.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-svh flex flex-col" id=".dev">
        <Navbar />  
        {children}
      <Footer />
      </body>
    </html>
  );
}
