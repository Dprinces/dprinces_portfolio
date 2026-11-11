"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

const ease = [0.22, 1, 0.36, 1] as const;

function LagosClock() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Lagos",
      hour: "2-digit",
      minute: "2-digit",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{time ?? "--:--"} WAT</span>;
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const photoRotate = useTransform(scrollYProgress, [0, 1], [-2, 4]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const words = ["I", "build", "software", "that"];

  return (
    <section ref={ref} id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-40 md:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-ember/20 blur-[140px]"
        aria-hidden
      />

      <div className="container-x relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
        <motion.div style={{ y: textY }}>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-ink-2/80 py-1.5 pl-2.5 pr-4 text-sm text-fog backdrop-blur transition-colors hover:border-ember/50 hover:text-paper"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Open to roles &amp; freelance work
          </motion.a>

          <h1 className="text-[clamp(2.6rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
            <span className="sr-only">
              {profile.name}, {profile.role}. I build software that improves the world.
            </span>
            <span aria-hidden>
              {words.map((w, i) => (
                <motion.span
                  key={w}
                  className="mr-[0.22em] inline-block"
                  initial={{ opacity: 0, y: "0.5em", filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.07, ease }}
                >
                  {w}
                </motion.span>
              ))}
              <br />
              <motion.span
                className="inline-block font-serif text-[1.08em] font-normal italic tracking-[-0.02em] text-ember"
                initial={{ opacity: 0, y: "0.5em", filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: 0.45, ease }}
              >
                improves
              </motion.span>{" "}
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: "0.5em", filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.55, ease }}
              >
                the world.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-fog text-pretty"
          >
            Hi, I&apos;m <span className="text-paper">Anthony Olasunkanmi Ogunleye</span> — a full-stack &amp; AI
            engineer from Nigeria. {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3.5 font-medium text-ink transition-all hover:bg-ember-2 hover:shadow-[0_0_40px_rgb(255_107_53/0.45)]"
            >
              See my work
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line-2 px-6 py-3.5 font-medium transition-colors hover:border-paper"
            >
              <Download className="size-4" /> Download CV
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.14em] text-fog"
          >
            <div className="flex items-center gap-2">
              <dt className="sr-only">Location</dt>
              <MapPin className="size-3.5 text-ember" />
              <dd>{profile.location}</dd>
            </div>
            <div className="flex items-center gap-2">
              <dt className="sr-only">Local time</dt>
              <span className="size-1.5 rounded-full bg-ember animate-pulse-dot" />
              <dd>
                <LagosClock />
              </dd>
            </div>
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease }}
          className="relative mx-auto w-full max-w-[440px]"
        >
          <motion.div style={{ y: photoY, rotate: photoRotate }} className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-ember/40 via-ember/5 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-line-2 bg-ink-3 p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/images/hero-sagegrey.jpg"
                  alt="Anthony Ogunleye outside the Sage Grey Technologies office in Lagos"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="object-cover object-[50%_35%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/90 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
                  <div>
                    <p className="label !text-paper/70">Currently</p>
                    <p className="mt-1 text-sm font-medium">
                      {profile.currently.role} · {profile.currently.org}
                    </p>
                  </div>
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub profile"
                    className="grid size-10 place-items-center rounded-full bg-paper text-ink transition-transform hover:rotate-45"
                  >
                    <ArrowUpRight className="size-5" />
                  </a>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.7, ease }}
              className="absolute -left-4 top-10 rounded-2xl border border-line bg-ink-2/90 px-4 py-3 shadow-2xl backdrop-blur sm:-left-10"
            >
              <p className="label">Stack</p>
              <p className="mt-1 font-mono text-sm">TS · Node · React Native</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.15, duration: 0.7, ease }}
              className="absolute -right-3 bottom-24 rounded-2xl sm:bottom-auto sm:top-1/2 border border-line bg-ink-2/90 px-4 py-3 shadow-2xl backdrop-blur sm:-right-8"
            >
              <p className="label">Shipping</p>
              <p className="mt-1 font-mono text-sm">
                <span className="text-ember">●</span> web · mobile · AI
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
