import { PhotoCard } from "@/components/ui/PhotoCard"
import { TextAnimate } from "@/components/ui/TextAnimate"

export const AboutSection = ({ highlights }) => {
  return (
    <section id="about" className="space-y-12">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:items-start">
        <div className="max-w-3xl">
          <TextAnimate
            as="h2"
            animation="slideUp"
            className="text-3xl font-semibold text-foreground md:text-4xl"
          >
            Sobre mim
          </TextAnimate>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Construo produtos end-to-end, da descoberta à evolução, unindo times multifuncionais em torno de uma narrativa clara.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-black/5 bg-white/80 p-6 text-left shadow-[0_20px_60px_-50px_rgba(15,15,40,0.4)] backdrop-blur transition hover:border-black/10 hover:bg-white/90 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/25 dark:hover:bg-white/10"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <PhotoCard
            name="Vitor Pereira"
            role="Desenvolvedor Fullstack Junior"
            location="Minas Gerais - Brasil"
            availability="Disponível para colaborações"
            badges={["UX Strategy", "Motion UI", "Web Performance"]}
            stats={[
              { label: "Experiência", value: "02+ anos" },
              { label: "Projetos", value: "6 entregues" },
            ]}
          />
        </div>
      </div>
    </section>
  )
}
