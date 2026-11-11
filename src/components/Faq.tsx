"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="container-x py-24 md:py-32">
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
        <div className="lg:sticky lg:top-28">
          <SectionHeader index="05" label="FAQ" title="Questions people usually ask." />
        </div>
        <Reveal>
          <ul className="border-t border-line">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b border-line">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-medium transition-colors hover:text-ember sm:text-xl"
                    >
                      {f.q}
                      <span
                        className={`grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          isOpen ? "rotate-45 border-ember bg-ember text-ink" : "border-line-2"
                        }`}
                      >
                        <Plus className="size-4" />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl pb-6 leading-relaxed text-fog">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
