import React, { useEffect } from "react"
import { Github, Home, Linkedin, Mail } from "lucide-react"

import { Dock, DockIcon } from "@/components/ui/Dock"
import { navItems } from "@/data/navigation"
import {
  aboutHighlights,
  capabilities,
  featuredProjects,
  stackItems,
} from "@/data/portfolio"
import { AboutSection } from "@/sections/AboutSection"
import { ContactSection } from "@/sections/ContactSection"
import { SiteFooter } from "@/sections/Footer"
import { HeroSection } from "@/sections/HeroSection"
import { SiteHeader } from "@/sections/Header"
import { ProjectsSection } from "@/sections/ProjectsSection"
import { StackSection } from "@/sections/StackSection"

const App = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

  return (
    <div id="top" className="relative bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.35),transparent_55%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-32 pt-10">
        <SiteHeader navItems={navItems} />

        <main className="flex flex-1 flex-col gap-32">
          <HeroSection capabilities={capabilities} />
          <AboutSection highlights={aboutHighlights} />
          <StackSection items={stackItems} />
          <ProjectsSection projects={featuredProjects} />
          <ContactSection />
        </main>

        <SiteFooter />
      </div>

      <Dock
        className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 border-white/5 bg-black/25"
        iconSize={56}
        iconMagnification={60}
      >
        <DockIcon>
          <button
            onClick={scrollToTop}
            className="flex size-full items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black/50"
            aria-label="Ir para o topo"
          >
            <Home className="size-5" />
          </button>
        </DockIcon>
        <DockIcon>
          <a
            href="https://github.com/vitouncio"
            className="flex size-full items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black/50"
            aria-label="GitHub"
          >
            <Github className="size-5" />
          </a>
        </DockIcon>
        <DockIcon>
          <a
            href="https://www.linkedin.com/in/vitor-pereira-3222a9122/"
            className="flex size-full items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black/50"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5" />
          </a>
        </DockIcon>
        <DockIcon>
          <a
            href="mailto:vpereira.dev@gmail.com"
            className="flex size-full items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black/50"
            aria-label="Email"
          >
            <Mail className="size-5" />
          </a>
        </DockIcon>
      </Dock>
    </div>
  )
}

export default App
