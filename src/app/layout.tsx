import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

const playFairDisplayFont = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const latoFont = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: "400"
});


export const metadata: Metadata = {
  title: "Eugene Tang KangJie",
  description: "Eugene's portfolio",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${playFairDisplayFont.variable} ${latoFont.variable} antialiased tracking-tight`}>
                
                {children}
            </body>
        </html>
  );
}
