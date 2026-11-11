import { stack } from "@/data/profile";

export function Marquee() {
  const items = [...stack, ...stack];
  return (
    <section aria-label="Technologies I use" className="relative border-y border-line bg-ink-2 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-2 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-2 to-transparent" />
      <div className="flex overflow-hidden">
        <ul className="flex shrink-0 animate-marquee items-center gap-10 pr-10 hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <li
              key={`${t}-${i}`}
              aria-hidden={i >= stack.length}
              className="flex items-center gap-10 whitespace-nowrap font-mono text-sm uppercase tracking-[0.16em] text-fog"
            >
              {t}
              <span className="text-ember">✦</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
