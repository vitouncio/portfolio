import { ArrowUpRight, Download } from "lucide-react"
import { CvDropdownButton } from "@/components/ui/CvDropdownButton"

import { LightRays } from "@/components/ui/LightRays"
import { RippleButton } from "@/components/ui/RippleButton"
import { TextAnimate } from "@/components/ui/TextAnimate"

export const HeroSection = ({ capabilities }) => {
  return (
    <section
      id="hero"
      className="mt-10 relative isolate overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 px-6 pb-16 pt-20 shadow-[0_40px_120px_-60px_rgba(15,15,35,0.6)] backdrop-blur-xl md:px-12"
    >
      <LightRays className="-z-10" count={9} speed={16} blur={48} length="85vh" />

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 text-center">
        <TextAnimate
          as="h1"
          animation="blurInUp"
          className="text-balance text-4xl font-semibold leading-tight text-foreground md:text-5xl"
        >
          Olá, eu sou Vitor Pereira. Desenvolvedor Full Stack apaixonado por criar soluções digitais inovadoras.
        </TextAnimate>
        <TextAnimate
          as="p"
          animation="fadeIn"
          by="line"
          className="text-balance text-base text-muted-foreground md:text-lg"
        >
          Minha abordagem mistura pesquisa profunda, prototipagem rápida e estética precisa para revelar experiências que parecem inevitáveis.
        </TextAnimate>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <RippleButton
            className="flex items-center gap-2 rounded-full border-transparent bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition hover:shadow-primary/40"
            rippleColor="rgba(10,10,20,0.35)"
          >
            Ver projetos <ArrowUpRight className="size-4" />
          </RippleButton>
          <CvDropdownButton />
        </div>
      </div>

      <div className="mx-auto mt-14 flex flex-wrap justify-center gap-3">
        {capabilities.map((capability) => (
          <span
            key={capability}
            className="rounded-full border border-white/15 bg-black/30 px-5 py-2 text-[11px] font-medium uppercase tracking-[0.3em] text-foreground/75 shadow-[0_10px_40px_-30px_rgba(255,255,255,0.9)]"
          >
            {capability}
          </span>
        ))}
      </div>
    </section>
  )
}
