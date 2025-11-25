import type { CSSProperties } from "react"
import styled from "styled-components"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    tags?: string[]
    href?: string
    preview?: string
  }
  index?: number
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { title, description, tags = [], href = "#", preview } = project
  const hasPreview = Boolean(preview)
  const previewVar = hasPreview ? ({ "--preview-image": `url(${preview})` } as CSSProperties) : undefined
  const isExternal = href && href !== "#"

  return (
    <StyledWrapper
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      style={previewVar}
      data-preview={hasPreview}
    >
      <div className="card">
        {!hasPreview && (
          <>
            <div className="card__index">#{String(index != null ? index + 1 : 1).padStart(2, "0")}</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
            </svg>
          </>
        )}
        <div className="card__content">
          <p className="card__title">{title}</p>
          <p className="card__description">{description}</p>
          {tags.length > 0 && (
            <div className="card__tags">
              {tags.map((tag) => (
                <span key={`${title}-${tag}`}>{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.a`
  text-decoration: none;
  color: inherit;

  .card {
    position: relative;
    width: 100%;
    min-height: 220px;
    border-radius: 26px;
    padding: 32px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    overflow: hidden;
    perspective: 1000px;
    border: 1px solid color-mix(in srgb, var(--border) 80%, #ffffff 20%);
    background: color-mix(in srgb, var(--card) 70%, #ffffff 30%);
    box-shadow: 0 25px 70px -45px rgba(15, 23, 42, 0.35);
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      border-color 0.4s ease, box-shadow 0.4s ease;
    isolation: isolate;
  }

  .card::before {
    content: "";
    display: none;
  }

  &[data-preview="true"] .card {
    background: transparent;
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: none;
  }

  &[data-preview="true"] .card::before {
    display: block;
    position: absolute;
    inset: 0;
    background-image: var(--preview-image);
    background-size: cover;
    background-position: center;
    opacity: 1;
    z-index: -1;
  }

  body:not(.dark) &[data-preview="true"] .card {
    border-color: rgba(12, 12, 14, 0.08);
    box-shadow: 0 25px 70px -55px rgba(0, 0, 0, 0.35);
  }

  .card::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(115deg, color-mix(in srgb, var(--primary) 25%, transparent), transparent);
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: -1;
  }

  &[data-preview="true"] .card::after {
    display: none;
  }

  .card__index {
    position: absolute;
    top: 20px;
    right: 28px;
    font-size: 0.8rem;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: color-mix(in srgb, var(--foreground) 45%, #7c7c8a 55%);
  }

  .card svg {
    width: 48px;
    fill: color-mix(in srgb, var(--foreground) 55%, #555 45%);
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s ease;
  }

  .card:hover {
    transform: translateY(-6px) scale(1.015);
    border-color: color-mix(in srgb, var(--primary) 50%, transparent);
    box-shadow: 0 30px 70px -40px rgba(15, 23, 42, 0.45);
  }

  .card:hover::after {
    opacity: 0.5;
  }

  &[data-preview="true"] .card:hover {
    transform: translateY(-2px) scale(1.01);
    border-color: rgba(255, 255, 255, 0.25);
    box-shadow: 0 25px 60px -45px rgba(0, 0, 0, 0.45);
  }

  .card__content {
    position: absolute;
    inset: 0;
    padding: 32px;
    box-sizing: border-box;
    background: color-mix(in srgb, var(--card) 80%, #ffffff 20%);
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  &[data-preview="true"] .card__content {
    background: color-mix(in srgb, var(--card) 85%, #ffffff 15%);
  }

  .card__title {
    margin: 0 0 12px;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--foreground);
  }

  .card:hover svg {
    transform: translateY(-12px) scale(0.7);
    opacity: 0;
  }

  &[data-preview="true"] .card__index,
  &[data-preview="true"] svg {
    display: none;
  }

  .card__description {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.55;
    color: color-mix(in srgb, var(--foreground) 65%, rgba(0, 0, 0, 0.35) 35%);
  }

  .card__tags {
    margin-top: 18px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .card__tags span {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    padding: 6px 12px;
    border-radius: 999px;
    border: 1px solid color-mix(in srgb, var(--border) 70%, #ffffff 30%);
    background: color-mix(in srgb, var(--muted) 75%, #ffffff 25%);
    color: color-mix(in srgb, var(--muted-foreground) 80%, #1f2937 20%);
  }

  body.dark & .card {
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: radial-gradient(circle at top, rgba(100, 100, 110, 0.2), transparent 40%), rgba(0, 0, 0, 0.8);
    box-shadow: 0 25px 70px -35px rgba(15, 23, 42, 0.9);
  }

  body.dark & .card__content {
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8px);
  }

  body.dark &[data-preview="true"] .card {
    border-color: rgba(255, 255, 255, 0.15);
    box-shadow: none;
  }

  body.dark & .card__title {
    color: #f8fafc;
  }

  body.dark & .card__description {
    color: rgba(226, 232, 240, 0.75);
  }

  body.dark & .card__tags span {
    border-color: rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.7);
  }

`


