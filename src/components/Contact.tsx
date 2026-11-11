"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Loader2, Mail, Phone, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { Reveal } from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-2xl border border-line bg-ink px-5 py-4 text-paper placeholder:text-fog/60 outline-none transition-colors focus:border-ember";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: `Portfolio enquiry from ${data.name}`, _template: "table" }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 translate-y-1/2 rounded-full bg-ember/20 blur-[140px]"
        aria-hidden
      />
      <div className="container-x relative">
        <Reveal>
          <p className="label mb-6 flex items-center gap-3">
            <span className="text-ember">06</span>
            <span className="h-px w-8 bg-line-2" />
            Contact
          </p>
          <h2 className="max-w-4xl text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
            Have an idea? <br />
            <span className="font-serif font-normal italic text-ember">Let&apos;s build it.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal className="flex flex-col gap-4">
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? "Email copied" : `Copy email address ${profile.email}`}
              className="group flex items-center justify-between gap-4 rounded-3xl border border-line bg-ink-2 p-6 text-left transition-colors hover:border-ember/50"
            >
              <span className="flex min-w-0 items-center gap-4">
                <Mail className="size-5 shrink-0 text-ember" />
                <span className="min-w-0">
                  <span className="label block">Email</span>
                  <span className="mt-1 block break-all text-[15px] sm:text-lg">{profile.email}</span>
                </span>
              </span>
              <span className="flex shrink-0 items-center gap-1.5 font-mono text-xs text-fog group-hover:text-paper">
                {copied ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
                <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
              </span>
            </button>
            <a
              href={`tel:${profile.phoneHref}`}
              className="flex items-center gap-4 rounded-3xl border border-line bg-ink-2 p-6 transition-colors hover:border-ember/50"
            >
              <Phone className="size-5 text-ember" />
              <span>
                <span className="label block">Phone / WhatsApp</span>
                <span className="mt-1 block text-lg">{profile.phone}</span>
              </span>
            </a>
            <div className="grid grid-cols-2 gap-4">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-3xl border border-line bg-ink-2 p-6 transition-colors hover:border-ember/50"
              >
                <GitHubIcon className="size-5" />
                <span className="flex items-center gap-1 text-sm">
                  GitHub <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
                </span>
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-3xl border border-line bg-ink-2 p-6 transition-colors hover:border-ember/50"
              >
                <LinkedInIcon className="size-5" />
                <span className="flex items-center gap-1 text-sm">
                  LinkedIn <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-4 rounded-3xl border border-line bg-ink-2 p-6 sm:p-8"
            >
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="label">Name</span>
                  <input required name="name" autoComplete="name" placeholder="Ada Lovelace" className={inputClass} />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="label">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="label">Project</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell me what you're building, your timeline and budget…"
                  className={`${inputClass} resize-none`}
                />
              </label>
              <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p role="status" aria-live="polite" className="text-sm">
                  {status === "sent" && (
                    <span className="text-emerald-400">Thanks — I&apos;ll reply within a day or two.</span>
                  )}
                  {status === "error" && (
                    <span className="text-red-400">
                      Couldn&apos;t send. Email me at{" "}
                      <a className="underline" href={`mailto:${profile.email}`}>
                        {profile.email}
                      </a>
                    </span>
                  )}
                </p>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ember px-7 py-3.5 font-medium text-ink transition-all hover:bg-ember-2 hover:shadow-[0_0_40px_rgb(255_107_53/0.45)] disabled:opacity-60"
                >
                  {status === "sending" ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
