import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import React, { ReactNode } from "react"; // Import ReactNode from 'react'
import Home from  './page';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mansi's portfolio",
  description: "Journey ahead, don't look back",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Use ReactNode instead of React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange       >
          <Home />
        </ThemeProvider>
      </body>
    </html>
  );
}
