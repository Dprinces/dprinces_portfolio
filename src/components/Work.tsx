import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { archive, projects, profile, type Project } from "@/data/profile";
import { GitHubIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

// Shown in place of a screenshot for projects without a public UI.
const snippets: Record<string, string[]> = {
  "project-legacy": [
    "whatsapp ▸ \"Hi, I want 5 cartons of noodles\"",
    "bot      ▸ Added to cart · ₦42,500",
    "twilio   ▸ OTP sent · verified ✓",
    "order    ▸ #LG-20931 created",
    "chowdeck ▸ rider assigned · ETA 35 min",
    "pos      ▸ inventory synced to Moniepoint",
    "",
    "$ orders --monthly      5,000+",
  ],
  salonconnect: [
    "$ npm run dev",
    "store   ▸ redux toolkit · 6 slices",
    "forms   ▸ formik + yup ✓",
    "ui      ▸ material ui + tailwind",
    "",
    "GET /salons?near=me        200",
    "POST /bookings             201",
  ],
  eacc: [
    "$ uvicorn app.main:app --reload",
    "INFO  EACC API ready on :8000",
    "",
    "POST /auth/register        201",
    "POST /bookings/passenger   201",
    "POST /bookings/cargo       201",
    "GET  /pricing/quote?kg=40  200",
    "  → distance + weight + airport fee",
  ],
  "service-booking": [
    "$ npx expo start",
    "› Metro waiting on exp://192.168.0.4",
    "",
    "useBookingStore()  zustand",
    "bookingSchema      zod ✓",
    "AsyncStorage       3 bookings saved",
    "› Press a │ open Android",
  ],
  "virtual-assistant": [
    "$ npm run dev",
    "server  ▸ express on :5000",
    "db      ▸ mongodb connected",
    "auth    ▸ jwt + refresh tokens",
    "",
    "> summarise today's tasks",
    "assistant: You have 4 open tasks…",
  ],
};

function BrowserFrame({ project, priority }: { project: Project; priority?: boolean }) {
  const host = project.live
    ? new URL(project.live).host
    : project.repo
      ? project.repo.replace("https://", "")
      : "private · client project";
  return (
    <div className="overflow-hidden rounded-2xl border border-line-2 bg-ink-3 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.7)]">
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line-2" />
          <span className="size-2.5 rounded-full bg-line-2" />
          <span className="size-2.5 rounded-full bg-line-2" />
        </div>
        <span className="truncate rounded-md bg-ink px-3 py-1 font-mono text-[11px] text-fog">{host}</span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-ink">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 95vw, 680px"
            className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
          />
        ) : (
          <pre className="absolute inset-0 overflow-hidden p-6 font-mono text-[12px] leading-6 text-fog sm:text-[13px]">
            {(snippets[project.slug] ?? project.tags.map((t) => `✓ ${t}`)).map((line, i) => (
              <div key={i} className={line.startsWith("$") || line.startsWith(">") ? "text-ember" : ""}>
                {line || " "}
              </div>
            ))}
            <span className="inline-block h-4 w-2 translate-y-1 animate-pulse bg-ember" />
          </pre>
        )}
      </div>
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-ember"
        >
          Visit live <ArrowUpRight className="size-4" />
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line-2 px-4 py-2 text-sm font-medium transition-colors hover:border-paper"
        >
          <GitHubIcon className="size-4" /> Source
        </a>
      )}
      {!project.live && !project.repo && (
        <span className="inline-flex items-center rounded-full border border-dashed border-line-2 px-4 py-2 font-mono text-xs text-fog">
          Private client codebase
        </span>
      )}
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-fog">
          {t}
        </li>
      ))}
    </ul>
  );
}

export function Work() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="container-x py-24 md:py-32">
      <SectionHeader
        index="03"
        label="Selected work"
        title={
          <>
            Things I&apos;ve <span className="font-serif font-normal italic text-ember">shipped</span>.
          </>
        }
        aside={<p>Production systems for enterprises, retailers, churches, campuses and government — most of them live right now.</p>}
      />

      <div className="flex flex-col gap-24 md:gap-32">
        {featured.map((p, i) => (
          <Reveal key={p.slug}>
            <article
              className={`group grid grid-cols-1 items-center gap-10 lg:gap-16 ${
                i % 2
                  ? "lg:grid-cols-[1fr_1.25fr] lg:[&>*:first-child]:order-last"
                  : "lg:grid-cols-[1.25fr_1fr]"
              }`}
            >
              <a href={p.live ?? p.repo} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`} className="relative block">
                <div className="absolute -inset-6 rounded-[2rem] bg-ember/0 blur-3xl transition-colors duration-700 group-hover:bg-ember/10" />
                <div className="relative">
                  <BrowserFrame project={p} priority={i === 0} />
                </div>
              </a>
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <p className="label">
                    <span className="text-ember">{String(i + 1).padStart(2, "0")}</span> · {p.kicker}
                  </p>
                  <span className="font-mono text-xs text-fog">{p.year}</span>
                </div>
                <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">{p.title}</h3>
                <p className="text-lg leading-relaxed text-fog text-pretty">{p.summary}</p>
                <Tags tags={p.tags} />
                <ProjectLinks project={p} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-32 grid grid-cols-1 gap-6 md:grid-cols-2">
        {rest.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.06} className="h-full">
            <article className="group flex h-full flex-col gap-5 rounded-3xl border border-line bg-ink-2 p-4 transition-colors hover:border-ember/40">
              <BrowserFrame project={p} />
              <div className="flex flex-1 flex-col gap-4 px-2 pb-2">
                <div className="flex items-center justify-between">
                  <p className="label">{p.kicker}</p>
                  <span className="font-mono text-xs text-fog">{p.year}</span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-fog">{p.summary}</p>
                <Tags tags={p.tags} />
                <ProjectLinks project={p} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-32">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-tight">The archive</h3>
          <a
            href={`${profile.socials.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-fog transition-colors hover:text-ember"
          >
            All 40+ repos <ArrowUpRight className="size-4" />
          </a>
        </div>
        <ul className="border-t border-line">
          {archive.map((a) => (
            <li key={a.title}>
              <a
                href={a.href}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-[3.5rem_1fr_auto] items-center gap-4 border-b border-line py-5 transition-colors hover:bg-ink-2 sm:grid-cols-[5rem_1fr_1fr_auto] sm:px-4"
              >
                <span className="font-mono text-xs text-fog">{a.year}</span>
                <span className="font-medium transition-colors group-hover:text-ember">{a.title}</span>
                <span className="hidden font-mono text-xs text-fog sm:block">{a.tech}</span>
                <ArrowUpRight className="size-4 text-fog transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember" />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
