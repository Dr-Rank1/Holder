import { LayoutGrid, Link2, Mail, Scan } from "lucide-react";
import AppCard from "@/components/AppCard";
import { apps } from "@/data/apps";

export default function Home() {
  return (
    <main className="flex-1">
       {/* ── Hero ─────────────────────────────────────────────────────── */}
       <section className="flex flex-col items-center justify-center gap-6 px-6 py-20 text-center sm:py-28">
         <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800 ring-1 ring-zinc-700">
           <LayoutGrid className="h-7 w-7 text-emerald-400" />
         </div>

         <div className="flex flex-col gap-2">
           <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
             Ian Mbae
           </h1>
           <p className="text-base text-zinc-400 sm:text-lg">
             Full-Stack Software Developer
           </p>
         </div>

         <p className="max-w-md text-sm leading-relaxed text-zinc-500 sm:text-base">
           Building thoughtful, performant mobile apps. Explore my work on the
           Google Play Store.
         </p>
       </section>

      {/* ── Apps Section ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-zinc-800" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
            My Apps
          </h2>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {apps.map((app) => (
            <AppCard key={app.slug} {...app} />
          ))}
        </div>
      </section>

       {/* ── Footer ───────────────────────────────────────────────────── */}
       <footer className="border-t border-zinc-900 py-8">
         <div className="flex flex-col items-center gap-4">
           <p className="text-center text-xs text-zinc-600">
             &copy; {new Date().getFullYear()} Ian Mbae. All rights reserved.
           </p>
           {/* Social links */}
           <div className="flex items-center gap-3">
             {[
               { icon: Link2,  href: "https://github.com/stewiriffin", label: "GitHub" },
               { icon: Link2,  href: "https://www.linkedin.com/in/ianmbae/", label: "LinkedIn" },
               { icon: Mail, href: "mailto:theretoo2@gmail.com", label: "Email" },
             ].map(({ icon: Icon, href, label }) => (
               <a
                 key={label}
                 href={href}
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label={label}
                 className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 ring-1 ring-zinc-700 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-zinc-100"
               >
                 <Icon className="h-[20px] w-[20px]" />
               </a>
             ))}
           </div>
         </div>
       </footer>
    </main>
  );
}
