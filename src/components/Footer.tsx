import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: profile.socials.github, label: "GitHub", external: true },
  { href: "#work", label: "Work" },
  { href: profile.socials.linkedin, label: "LinkedIn", external: true },
  { href: "#experience", label: "Experience" },
  { href: profile.cv, label: "Download CV", download: true },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line pt-16">
      <div className="container-x flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-mono text-sm">
            dprince<span className="text-ember">.</span>dev
          </p>
          <p className="mt-2 max-w-xs text-sm text-fog">
            Designed and built by {profile.name} with Next.js, TypeScript and Tailwind CSS.
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external && { target: "_blank", rel: "noreferrer" })}
              {...(l.download && { download: true })}
              className="text-fog transition-colors hover:text-paper"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#top"
          aria-label="Back to top"
          className="grid size-12 place-items-center rounded-full border border-line-2 transition-colors hover:border-ember hover:bg-ember hover:text-ink"
        >
          <ArrowUp className="size-5" />
        </a>
      </div>

      <div className="container-x mt-16 flex flex-col gap-2 border-t border-line py-6 font-mono text-xs uppercase tracking-[0.14em] text-fog sm:flex-row sm:justify-between">
        <span>
          © {new Date().getFullYear()} {profile.handle}
        </span>
        <span>{profile.tagline} · Made in Nigeria</span>
      </div>

      <p
        aria-hidden
        className="pointer-events-none select-none whitespace-nowrap text-center text-[clamp(4rem,19vw,17rem)] font-bold leading-[0.75] tracking-[-0.06em] text-ink-3"
      >
        DPRINCE
      </p>
    </footer>
  );
}
