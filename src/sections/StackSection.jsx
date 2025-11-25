import { LightRays } from "@/components/ui/light-rays"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import { TextAnimate } from "@/components/ui/text-animate"

const orbitLogos = [
  { src: "/logos/docker-icon-svgrepo-com.svg", alt: "Docker" },
  { src: "/logos/git-svgrepo-com.svg", alt: "Git" },
  { src: "/logos/java-svgrepo-com.svg", alt: "Java" },
  { src: "/logos/mysql-svgrepo-com.svg", alt: "MySQL" },
  { src: "/logos/next-dot-js-svgrepo-com.svg", alt: "Next.js" },
  { src: "/logos/node-svgrepo-com.svg", alt: "Node.js" },
  { src: "/logos/python-svgrepo-com.svg", alt: "Python" },
  { src: "/logos/react-svgrepo-com.svg", alt: "React" },
  { src: "/logos/spring-icon-svgrepo-com.svg", alt: "Spring" },
  { src: "/logos/tailwind-svgrepo-com.svg", alt: "Tailwind CSS" },
  { src: "/logos/vite-svg.svg", alt: "Vite" },
  {src: "/logos/express-svgrepo-com.svg", alt: "Express"},
]

const halfOrbitIndex = Math.ceil(orbitLogos.length / 2)
const innerOrbitLogos = orbitLogos.slice(0, halfOrbitIndex - 2)
const outerOrbitLogos = orbitLogos.slice(halfOrbitIndex - 2)

export const StackSection = ({ items }) => {
  return (
    <section
      id="stack"
      className="relative overflow-hidden rounded-[2.5rem] border border-black/5 bg-white/85 px-6 py-16 backdrop-blur md:px-12 dark:border-white/10 dark:bg-white/10"
    >
      <LightRays className="-z-10" count={7} speed={20} blur={36} length="65vh" />
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
        <div className="flex flex-col items-center gap-10 text-center lg:items-start lg:text-left">
          <div className="max-w-2xl">
          <TextAnimate
            as="h2"
            animation="slideUp"
            className="text-3xl font-semibold text-foreground md:text-4xl"
          >
            Stack & Competências
          </TextAnimate>
          <p className="mt-4 text-base text-muted-foreground">
            A tecnologia certa para cada fase: prototipagem veloz, arquitetura resiliente e experiências que brilham.
          </p>
          </div>
          <div className="grid w-full gap-4 sm:grid-cols-2">
            {items.map((tech) => (
              <div
                key={tech.label}
                className="rounded-2xl border border-black/5 bg-white/75 px-6 py-5 text-left shadow-[0_20px_60px_-50px_rgba(15,15,40,0.5)] transition hover:border-black/10 hover:bg-white/90 dark:border-white/10 dark:bg-black/40 dark:shadow-[0_20px_60px_-40px_rgba(0,0,0,0.6)] dark:hover:border-white/25 dark:hover:bg-black/30"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-primary/80">
                  {tech.emphasis}
                </div>
                <div className="mt-3 text-lg font-semibold text-foreground">{tech.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto mt-3 flex w-full max-w-md items-center lg:mt-12 lg:justify-end">
          <div className="relative flex aspect-square w-full max-w-sm items-center justify-center rounded-4xl border border-black/5 bg-white/82 p-10 shadow-[0_35px_120px_-60px_rgba(15,15,35,0.45)] dark:border-white/10 dark:bg-black/35 dark:shadow-[0_35px_120px_-60px_rgba(15,15,35,0.6)]">
            <span className="absolute top-8 text-xs uppercase tracking-[0.45em] text-muted-foreground">
              stack orbit
            </span>
            <div className="relative mt-6 flex size-full items-center justify-center">
              <OrbitingCircles
                className="border border-black/5 bg-white/70 text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/70 dark:border-white/10 dark:bg-white/10 dark:text-foreground/90"
                duration={26}
                radius={60}
                iconSize={40}
                speed={1.05}
              >
                {innerOrbitLogos.map((logo) => (
                  <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="h-8 w-8 object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.4)]"
                  />
                ))}
              </OrbitingCircles>
              <OrbitingCircles
                className="border border-black/5 bg-white/70 text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/70 dark:border-white/10 dark:bg-white/10 dark:text-foreground/90"
                duration={34}
                radius={120}
                iconSize={48}
                speed={0.85}
                reverse
              >
                {outerOrbitLogos.map((logo) => (
                  <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="h-9 w-9 object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.5)]"
                  />
                ))}
              </OrbitingCircles>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
