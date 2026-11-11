import Image from "next/image";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const languages = [
  { name: "English", level: 4 },
  { name: "Yoruba", level: 3 },
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
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line">
              <Image
                src="/images/hero.jpg"
                alt="Anthony Ogunleye in a red hoodie in front of a graffiti wall"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
            </div>
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
