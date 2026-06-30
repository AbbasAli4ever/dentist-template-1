import type { Metadata } from "next";
import { Providers } from "./providers";

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
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
