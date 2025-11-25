import connectSpherePreview from "@/assets/projects/ConnectSphere/home.PNG"
import loginCCA from "@/assets/projects/cca/login-cca.PNG"
import reconhecimentoFacialPreview from "@/assets/projects/reconhecimento-facial/leon&nilce.PNG"
import readmePreview from "@/assets/projects/dio/readme-preview.png"

export const featuredProjects = [
  {
    title: "ConnectSphere",
    description:
      "App Next.js com Prisma para gestão de networking, RBAC e dashboards administrativos.",
    tags: ["Next.js", "Prisma", "Tailwind"],
    href: "https://github.com/vitouncio/ConnectSphere",
    preview: connectSpherePreview,
  },
  {
    title: "SSTech ",
    description:
      "Node.js + Express para controle de transações, atendimentos e relatórios financeiros.",
    tags: ["Node.js", "Express", "MySQL", "EJS"],
    href: "",
    preview: loginCCA,
  },
  {
    title: "PetHotel - Acadêmico",
    description:
      "Java Swing para cadastro de tutores, animais e hospedagens com Hibernate/MySQL.",
    tags: ["Java", "Swing", "Hibernate", "MySQL"],
    href: "https://github.com/clevim/Lps_HotelPet/tree/main",
  },
  {
    title: "TeraMusique - Acadêmico",
    description:
      "Java Swing para gerenciar sessões de musicoterapia e relatórios clínicos.",
    tags: ["Java", "Swing", "Hibernate", "MySQL"],
    href: "https://github.com/vitouncio/TeraMusique",
  },
  {
    title: "Reconhecimento Facial - Mini Curso",
    description:
      "POC em Python com DeepFace/OpenCV para autenticação facial e logs.",
    tags: ["Python", "DeepFace", "OpenCV"],
    href: "#",
    preview: reconhecimentoFacialPreview,
  },
  {
    title: "README Personalizado - DIO",
    description:
      "Colaboração em projeto open-source para criação de README dinâmico.",
    tags: ["HTML", "Markdown", "CSS"],
    href: "https://github.com/vitouncio/dio-lab-open-source",
    preview: readmePreview,
  },
]

export const capabilities = [
  "REST API engineering",
  "Technical leadership",
  "Product-focused UI/UX",
  "Advanced front-end builds",
  "Scalable back-end design",
]

export const aboutHighlights = [
  {
    title: "Missão",
    copy:
      "Construir experiências digitais acessíveis e elegantes que unam UX, código limpo e entrega consistente.",
  },
  {
    title: "Experiência",
    copy:
      "Mais de 2 anos em projetos acadêmicos e freelas, atuando com React, Node, Java e automações orientadas a dados.",
  },
  {
    title: "Valor",
    copy:
      "Trago disciplina de documentação, testes e aprendizado contínuo para evoluir rápido junto aos times e produtos.",
  },
]

export const stackItems = [
  { label: "React 19", emphasis: "Front-end" },
  { label: "Next.js", emphasis: "Experiência" },
  { label: "Node", emphasis: "Back-end" },
  { label: "Tailwind 4", emphasis: "Design System" },
  { label: "PostgreSQL & MySQL", emphasis: "Dados" },
  { label: "AWS", emphasis: "Infra" },
]
