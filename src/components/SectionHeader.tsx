import { Reveal } from "./Reveal";

type Props = { index: string; label: string; title: React.ReactNode; aside?: React.ReactNode };

export function SectionHeader({ index, label, title, aside }: Props) {
  return (
    <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
      <Reveal>
        <p className="label mb-4 flex items-center gap-3">
          <span className="text-ember">{index}</span>
          <span className="h-px w-8 bg-line-2" />
          {label}
        </p>
        <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {aside && (
        <Reveal delay={0.1} className="max-w-sm text-fog md:text-right">
          {aside}
        </Reveal>
      )}
    </div>
  );
}
