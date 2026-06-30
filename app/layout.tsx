import type { Metadata } from "next";
import { Rubik, Syne } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik", display: "swap" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", display: "swap" });

export const metadata: Metadata = {
  title: "MediWeb - Your Health Our Priority",
  description:
    "Comprehensive healthcare services with a personal touch, ensuring you receive the best care possible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable} ${syne.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
