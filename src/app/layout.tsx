import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "JCREA - Product Designer Portfolio",
  description: "Professional product designer creating exceptional user experiences through innovative design solutions",
  keywords: ["UI/UX Design", "Product Design", "Web Design", "Portfolio", "Designer"],
  authors: [{ name: "Jenny" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased">{children}</body>
      </html>
    </ClerkProvider>
  );
}
