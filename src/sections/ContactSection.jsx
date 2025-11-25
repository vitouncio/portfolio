import { Mail } from "lucide-react"

import { LightRays } from "@/components/ui/light-rays"
import { RippleButton } from "@/components/ui/ripple-button"
import { TextAnimate } from "@/components/ui/text-animate"

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 px-6 py-16 text-center backdrop-blur md:px-12"
    >
      <LightRays className="-z-10" count={6} speed={18} blur={42} length="70vh" />
      <TextAnimate
        as="h2"
        animation="blurInUp"
        className="text-3xl font-semibold text-foreground md:text-4xl"
      >
        Pronto para criar algo memorável?
      </TextAnimate>
      <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
        Envie uma mensagem e vamos construir juntos a próxima experiência que o seu público não vai esquecer.
      </p>
      <RippleButton
        className="mx-auto mt-8 flex items-center gap-2 rounded-full border-transparent bg-primary px-8 py-3 text-sm font-medium text-primary-foreground"
        rippleColor="rgba(15,15,30,0.35)"
      >
        Conversar agora <Mail className="size-4" />
      </RippleButton>
    </section>
  )
}
