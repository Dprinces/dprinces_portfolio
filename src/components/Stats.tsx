"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { stats } from "@/data/profile";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString("en-US")}
      <span className="text-ember">{suffix}</span>
    </span>
  );
}

export function Stats() {
  return (
    <section aria-label="At a glance" className="container-x py-20">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-2 bg-ink p-6 sm:p-8">
            <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">
              <Counter to={s.value} suffix={s.suffix} />
            </dd>
            <dt className="label order-last">{s.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
