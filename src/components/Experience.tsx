import Image from "next/image";
import { Award, GraduationCap } from "lucide-react";
import { certifications, education, experience, type TimelineItem } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

function Entry({ item, index }: { item: TimelineItem; index: number }) {
  return (
    <Reveal delay={index * 0.05}>
      <li className="group relative grid grid-cols-1 gap-2 border-b border-line py-8 md:grid-cols-[11rem_1fr] md:gap-10">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-fog md:pt-1.5">
          {item.period.endsWith("Present") ? (
            <span className="inline-flex items-center gap-2 text-ember">
              <span className="size-1.5 animate-pulse-dot rounded-full bg-ember" /> {item.period}
            </span>
          ) : (
            item.period
          )}
        </span>
        <div>
          <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-ember sm:text-2xl">
            {item.title}
          </h3>
          <p className="mt-1 text-paper/80">{item.org}</p>
          <p className="mt-3 max-w-2xl leading-relaxed text-fog">{item.body}</p>
          {item.tags && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <li key={t} className="rounded-full bg-ink-3 px-3 py-1 font-mono text-[11px] text-fog">
                  {t}
                </li>
              ))}
            </ul>
          )}
        </div>
      </li>
    </Reveal>
  );
}

export function Experience() {
  return (
    <section id="experience" className="container-x py-24 md:py-32">
      <SectionHeader
        index="04"
        label="Experience"
        title={
          <>
            Work <span className="font-serif font-normal italic text-ember">chronicles</span>.
          </>
        }
        aside={<p>From classrooms and cohorts to production code.</p>}
      />

      <ol className="border-t border-line">
        {experience.map((item, i) => (
          <Entry key={item.title + item.org} item={item} index={i} />
        ))}
      </ol>

      <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal className="h-full">
          <div className="h-full rounded-3xl border border-line bg-ink-2 p-8">
            <p className="label mb-8 flex items-center gap-2">
              <GraduationCap className="size-4 text-ember" /> Education
            </p>
            {education.map((e) => (
              <div key={e.title}>
                {e.image && (
                  <Image
                    src={e.image}
                    alt="Anthony Ogunleye at graduation"
                    width={72}
                    height={72}
                    className="mb-6 size-18 rounded-2xl border border-line object-cover"
                  />
                )}
                <p className="font-mono text-xs text-fog">{e.period}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">{e.title}</h3>
                <p className="mt-1 text-paper/80">{e.org}</p>
                <p className="mt-4 leading-relaxed text-fog">{e.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.08} className="h-full">
          <div className="h-full rounded-3xl border border-line bg-ink-2 p-8">
            <p className="label mb-6 flex items-center gap-2">
              <Award className="size-4 text-ember" /> Certifications
            </p>
            <ul>
              {certifications.map((c) => (
                <li
                  key={c.title}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-3.5 last:border-0"
                >
                  <div>
                    <p className="font-medium">{c.title}</p>
                    {c.issuer && <p className="text-sm text-fog">{c.issuer}</p>}
                  </div>
                  {c.year && <span className="font-mono text-xs text-fog">{c.year}</span>}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
