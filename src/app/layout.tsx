import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eugene Tang KangJie",
  description: "Eugene's portfolio",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${interFont.variable} antialiased tracking-tighter`}>
                <Navbar />
                {children}
            </body>
        </html>
  );
}
