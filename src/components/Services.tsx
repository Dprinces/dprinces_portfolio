import { Code2, CreditCard, Server, Sparkles } from "lucide-react";
import { services } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const icons = [Code2, Server, CreditCard, Sparkles];

export function Services() {
  return (
    <section id="services" className="container-x py-24 md:py-32">
      <SectionHeader
        index="02"
        label="What I do"
        title="From idea to production, end to end."
        aside={<p>I work across the stack so nothing gets lost between design, API and device.</p>}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {services.map((s, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={s.title} delay={i * 0.06}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-line bg-ink-2 p-8 transition-colors hover:border-ember/40">
                <div className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-ember/0 blur-3xl transition-colors duration-500 group-hover:bg-ember/15" />
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl border border-line bg-ink text-ember">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-fog">0{i + 1}</span>
                </div>
                <h3 className="mt-10 text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-fog">{s.body}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
