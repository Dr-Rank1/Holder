import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – QR Code Scanner",
  description:
    "Privacy policy for QR Code Scanner — a fast, secure, and lightweight mobile app.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 px-6 py-16 sm:py-24">
      <article className="mx-auto max-w-2xl">{children}</article>
    </main>
  );
}
