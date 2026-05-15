import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ian Mbae | Full-Stack Software Developer",
  description:
    "Developer website for Ian Mbae — Full-Stack Software Developer. Explore mobile apps built by Ian Mbae available on the Google Play Store.",
  metadataBase: new URL("https://ianmbae.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
       <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 antialiased">
          {children}
        </body>
      </html>
  );
}
