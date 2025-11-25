import { cn } from "@/lib/utils"
import eu from "@/assets/about/eu.jpeg"

interface PhotoCardStat {
  label: string
  value: string
}

interface PhotoCardProps {
  className?: string
  imageUrl?: string
  name?: string
  role?: string
  location?: string
  availability?: string
  badges?: string[]
  stats?: PhotoCardStat[]
}

export const PhotoCard = ({
  className,
  imageUrl = eu,
  name = "Seu Nome",
  role = "Product Designer & Front-end",
  location = "São Paulo · Brasil",
  availability = "Disponível para novos projetos",
  badges = ["Branding", "UI Motion", "Web Apps"],
  stats = [
    { label: "Experiência", value: "08+ anos" },
    { label: "Projetos", value: "45 entregues" },
  ],
}: PhotoCardProps) => {
  return (
    <div
      className={cn(
        "group relative isolate flex w-full max-w-sm flex-col items-center overflow-hidden rounded-4xl border border-black/5 bg-white/85 p-8 text-center text-slate-900 shadow-[0_35px_80px_-55px_rgba(15,15,45,0.35)] dark:border-white/10 dark:bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.06),transparent_55%),radial-gradient(circle_at_bottom,rgba(0,0,0,0.6),#050505)] dark:text-white dark:shadow-[0_35px_80px_-50px_rgba(0,0,0,0.9)]",
        className
      )}
    >
      <span className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      <div className="relative">
        <span className="absolute inset-0 rounded-[1.75rem] bg-linear-to-b from-white/10 to-transparent blur-2xl opacity-0 transition duration-500 group-hover:opacity-70" />
        <div className="relative mx-auto h-44 w-40 overflow-hidden rounded-[1.75rem] border border-black/10 bg-black/5 shadow-inner dark:border-white/15 dark:bg-black/60">
          <img
            src={imageUrl}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <p className="mt-6 text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-white/60">
        {availability}
      </p>
      <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{name}</h3>
      <p className="text-sm text-slate-600 dark:text-white/60">{role}</p>
      <p className="text-xs text-slate-500 dark:text-white/50">{location}</p>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {badges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-white/75"
          >
            {badge}
          </span>
        ))}
      </div>

      <div className="mt-8 grid w-full grid-cols-2 gap-4 text-left">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-black/5 bg-white/70 p-4 text-slate-800 dark:border-white/5 dark:bg-transparent dark:text-white"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-white/55">
              {stat.label}
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

