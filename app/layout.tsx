import { JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransitioin from "@/components/PageTransitioin";
import StairTransition from "@/components/StairTransition";

const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetBrainsMono",
});

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
      <body className={`${jetBrains_Mono.variable} font-mono`}>
        <Header />
        <StairTransition />
        <PageTransitioin>{children}</PageTransitioin>
      </body>
    </html>
  );
}
