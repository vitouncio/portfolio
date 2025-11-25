import { cn } from "@/lib/utils"

interface CyberCardProps {
  className?: string
}

export const CyberCard = ({ className }: CyberCardProps) => {
  return (
    <div
      className={cn(
        "group relative isolate w-full max-w-xs overflow-hidden rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),rgba(14,116,144,0.04)_55%,rgba(15,23,42,0.2))] p-8 text-center shadow-[0_25px_80px_-50px_rgba(56,189,248,0.45)] transition-transform duration-500 ease-out hover:-translate-y-2 hover:border-cyan-300/60 hover:shadow-[0_35px_120px_-40px_rgba(21,94,117,0.6)]",
        className
      )}
    >
      <span className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(94,234,212,0.45),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.35),transparent_65%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.0),rgba(255,255,255,0.14),rgba(255,255,255,0.0))] opacity-50" />
      <span className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="cyber-card-scan absolute inset-x-6 top-0 h-20 rounded-full bg-linear-to-b from-transparent via-cyan-300/25 to-transparent" />
      </span>

      <div className="relative z-10 flex flex-col items-center gap-5">
        <span className="text-[11px] uppercase tracking-[0.55em] text-cyan-200/70 transition-colors duration-500 group-hover:text-cyan-100">
          Hover ativa
        </span>
        <h3 className="bg-linear-to-r from-cyan-200 via-sky-300 to-purple-400 bg-clip-text text-3xl font-semibold uppercase tracking-[0.2em] text-transparent">
          Cyber Card
        </h3>
        <p className="max-w-56 text-sm leading-relaxed text-muted-foreground">
          Cartão responsivo com glow dinâmico, linhas em movimento e atmosfera futurista.
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-[10px] uppercase tracking-[0.45em] text-foreground/70">
          <span className="rounded-full border border-cyan-300/30 px-3 py-1 transition-colors duration-300 group-hover:border-cyan-200/70 group-hover:text-cyan-100">
            3D
          </span>
          <span className="rounded-full border border-cyan-300/30 px-3 py-1 transition-colors duration-300 group-hover:border-cyan-200/70 group-hover:text-cyan-100">
            Glow
          </span>
          <span className="rounded-full border border-cyan-300/30 px-3 py-1 transition-colors duration-300 group-hover:border-cyan-200/70 group-hover:text-cyan-100">
            Motion
          </span>
        </div>
      </div>

      <span className="pointer-events-none absolute inset-0 border border-cyan-100/5" />
      <span className="pointer-events-none absolute inset-4 rounded-[1.25rem] border border-cyan-200/10" />
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(103,232,249,0.08),transparent)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
    </div>
  )
}

export default CyberCard
