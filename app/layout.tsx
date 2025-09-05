import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";
import { Saira } from 'next/font/google';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export const metadata: Metadata = {
  title: "Florida Water Control",
  description: "florida water control",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {

   
  return (
    <html lang="en">
      <body suppressHydrationWarning>        
        {children}
      </body>
    </html>
  );
}
