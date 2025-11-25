import { Sparkle } from "lucide-react"

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

export const SiteHeader = ({ navItems }) => {
  return (
    <header className="flex flex-wrap items-center justify-between gap-6">
      <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-muted-foreground">
        <Sparkle className="size-4" />
        <span>portfólio - vitor pereira</span>
      </div>
      <nav className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
        {navItems.map((item) => (
          <a
            key={item.label}
            className="transition-colors hover:text-foreground"
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <AnimatedThemeToggler className="rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur" />
    </header>
  )
}
