import { Mail } from "lucide-react"
import wppsvg from "@/assets/logos/whatsapp-svgrepo-com.svg"
import { LightRays } from "@/components/ui/LightRays"
import { RippleButton } from "@/components/ui/RippleButton"
import { TextAnimate } from "@/components/ui/TextAnimate"

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
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-3 mt-8">
        <a
          href="mailto:vpereira.dev@gmail.com"
          className="inline-block"
          tabIndex={-1}
        >
          <RippleButton
            className="flex items-center gap-2 rounded-full border-transparent bg-primary px-8 py-3 text-sm font-medium text-primary-foreground"
            rippleColor="rgba(15,15,30,0.35)"
          >
            Conversar agora <Mail className="size-4" />
          </RippleButton>
        </a>
        <span className="mx-2 text-base font-semibold text-foreground/40">ou</span>
        <a
          href="https://wa.me/5531971012450?text=Ol%C3%A1!%20%F0%9F%91%8B%F0%9F%8F%BD%0AVim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
          tabIndex={-1}
        >
          <RippleButton
            className="flex items-center gap-2 rounded-full border-transparent bg-primary px-8 py-3 text-sm font-medium text-primary-foreground"
            rippleColor="rgba(15,15,30,0.35)"
          >
            Envie uma mensagem
            <img src={wppsvg} alt="WhatsApp" className="size-4" />
          </RippleButton>
        </a>
      </div>
    </section>
  )
}
