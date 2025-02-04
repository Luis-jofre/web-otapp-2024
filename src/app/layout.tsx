// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './navbar';
import Banner from './banner';
import Propuestadevalor from './propuestadevalor';
import Funcionalidades from './funcionalidades';
import Testimonios from './testimonios';
import Contacto from './contacto';
import Footer from './footer';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Banner /> 
        <Propuestadevalor />
        <Funcionalidades />
        <Testimonios />
        <Contacto />
        <Footer />
        {children}
      </body>
    </html>
  );
}