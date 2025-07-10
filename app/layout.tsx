import { Analytics } from "@vercel/analytics/next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";

// utils
import { createMetadata } from "@/lib/utils";

const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetBrainsMono",
  preload: false,
});

export const metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrains_Mono.variable} font-mono`}>
        <Analytics />
        <Header />
        {children}
      </body>
    </html>
  );
}
