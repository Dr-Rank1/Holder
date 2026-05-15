import { Smartphone, Zap, Shield, Feather, Scan } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  "Fast scanning with real-time camera preview": Zap,
  "Secure — zero data collection, fully offline capable": Shield,
  "Lightweight — small APK, minimal permissions": Feather,
};

interface AppCardProps {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  playStoreUrl: string;
  slug: string;
  icon?: React.ElementType;
}

export default function AppCard({
  name,
  tagline,
  description,
  features,
  playStoreUrl,
  slug,
  icon: IconOverride = Smartphone,
}: AppCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-lg transition-all hover:border-zinc-700 hover:bg-zinc-900 sm:p-8">
      {/* Top row: icon + name */}
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-800 ring-1 ring-zinc-700">
          <IconOverride className="h-6 w-6 text-emerald-400" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-zinc-100">{name}</h2>
          <p className="text-sm text-zinc-400">{tagline}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-zinc-300">
        {description}
      </p>

      {/* Features */}
      <ul className="mt-5 space-y-2.5">
        {features.map((feature) => {
          const Icon = iconMap[feature] ?? Smartphone;
          return (
            <li key={feature} className="flex items-center gap-2 text-sm text-zinc-400">
              <Icon className="h-4 w-4 shrink-0 text-emerald-400" />
              <span>{feature}</span>
            </li>
          );
        })}
      </ul>

      {/* Play Store badge link */}
      <Link
        href={`/privacy/${slug}`}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-100 ring-1 ring-zinc-700 transition-colors hover:bg-zinc-700"
      >
        View on Google Play
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
        </svg>
      </Link>
    </article>
  );
}
