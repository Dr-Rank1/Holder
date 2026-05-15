import { ArrowLeft, Calendar, ShieldCheck, UserX } from "lucide-react";
import Link from "next/link";

const LAST_UPDATED = "January 1, 2026";
const APP_NAME = "QR Code Scanner";
const DEVELOPER = "Ian Mbae";

export default function QRCodeScannerPrivacyPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <header>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          Privacy Policy – {APP_NAME}
        </h1>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-zinc-500">
          <Calendar className="h-3.5 w-3.5" />
          Last updated: {LAST_UPDATED}
        </p>
      </header>

      <div className="flex flex-col gap-8 text-sm leading-relaxed text-zinc-300">
        <section>
          <h2 className="mb-2 text-base font-semibold text-zinc-100">
            Introduction
          </h2>
          <p>
            This Privacy Policy describes how {APP_NAME} (&quot;the App&quot;),
            developed by <strong>{DEVELOPER}</strong>, handles information when
            you use the App. We built this App to be as private and
            lightweight as possible.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-zinc-100">
            Information We Collect
          </h2>
          <p>
            {APP_NAME} does <strong>not collect, store, or transmit</strong> any
            personal information or usage data to external servers.
          </p>
          <p>
            The App uses your device&apos;s camera solely to scan QR codes
            within the app session. No camera footage or scanned code data is
            ever sent off your device.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-zinc-100">
            Local Storage
          </h2>
          <p>
            Scan history may be stored locally on your device using standard
            storage mechanisms. This data remains entirely on your device and
            can be cleared at any time from within the App&apos;s settings.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-zinc-100">
            Third-Party Services
          </h2>
          <p>
            {APP_NAME} does <strong>not</strong> use any third-party analytics,
            advertising networks, or tracking services.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-zinc-100">
            Children&apos;s Privacy
          </h2>
          <p>
            The App is safe for all ages. Because we do not collect any personal
            data, there are no special safeguards required beyond the
            App&apos;s general privacy stance.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-zinc-100">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated &quot;Last updated&quot;
            date.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-zinc-100">
            Contact
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact{" "}
            <a
              href="mailto:hello@ianmbae.dev"
              className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300"
            >
              hello@ianmbae.dev
            </a>
            .
          </p>
        </section>

        {/* Summary badges */}
        <div className="flex flex-wrap gap-3 pt-2">
          {[
            { icon: UserX, label: "No data collected" },
            { icon: ShieldCheck, label: "Fully offline-capable" },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full bg-zinc-800/80 px-3 py-1.5 text-xs font-medium text-zinc-300 ring-1 ring-zinc-700"
            >
              <Icon className="h-3.5 w-3.5 text-emerald-400" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
