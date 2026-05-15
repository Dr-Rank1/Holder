import { Scan } from "lucide-react";

export interface App {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  playStoreUrl: string;
  playStorePackage: string;
  icon?: React.ElementType;
}

export const apps: App[] = [
  {
    slug: "qr-code-scanner",
    name: "QR Code Scanner",
    tagline: "Scan any QR code in milliseconds",
    description:
      "A fast, secure, and lightweight QR code scanner built for everyday use. Point your camera at any QR code and get instant results — no sign-up, no ads, no data collection.",
    features: [
      "Fast scanning with real-time camera preview",
      "Secure — zero data collection, fully offline capable",
      "Lightweight — small APK, minimal permissions",
    ],
    playStoreUrl: "#",
    playStorePackage: "com.example.qrcodescanner",
    icon: Scan,
  },
];
