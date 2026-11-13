import Image from "next/image";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const languages = [
  { name: "English", level: 4 },
  { name: "Yoruba", level: 4 },
];

export function About() {
  return (
    <section id="about" className="container-x py-24 md:py-32">
      <SectionHeader
        index="01"
        label="About"
        title={
          <>
            Teacher by training.{" "}
            <span className="font-serif font-normal italic text-ember">Builder</span> by obsession.
          </>
        }
      />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="relative">
          <div className="sticky top-28">
            <figure className="group relative">
              <div className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-ember/35 via-ember/5 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-line-2 bg-ink-3 p-2">
                <div className="relative aspect-square overflow-hidden rounded-[1.35rem]">
                  <Image
                    src="/images/about-laptop.jpg"
                    alt="Anthony Ogunleye smiling while working on a laptop"
                    fill
                    sizes="(max-width: 1024px) 90vw, 440px"
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/85 to-transparent" />
                  <figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                    <span>
                      <span className="label block !text-paper/70">Based in</span>
                      <span className="mt-1 block text-sm font-medium">{profile.location}</span>
                    </span>
                    <span className="flex items-center gap-2 rounded-full border border-paper/15 bg-ink/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper/80 backdrop-blur">
                      <span className="size-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
                      Open to work
                    </span>
                  </figcaption>
                </div>
              </div>
            </figure>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {languages.map((l) => (
                <div key={l.name} className="rounded-2xl border border-line p-4">
                  <p className="label">{l.name}</p>
                  <div className="mt-3 flex gap-1.5" aria-label={`${l.level} out of 4`}>
                    {[1, 2, 3, 4].map((n) => (
                      <span
                        key={n}
                        className={`h-1.5 flex-1 rounded-full ${n <= l.level ? "bg-ember" : "bg-line"}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          {profile.about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p
                className={
                  i === 0
                    ? "text-2xl leading-snug tracking-tight text-paper text-pretty md:text-3xl"
                    : "text-lg leading-relaxed text-fog text-pretty"
                }
              >
                {p}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <blockquote className="mt-4 border-l-2 border-ember pl-6">
              <p className="font-serif text-3xl italic leading-tight text-paper">
                &ldquo;Solid methodologies, websites that stand the test of time, and users who leave
                happier than they came.&rdquo;
              </p>
              <footer className="label mt-4">— How I measure my work</footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
