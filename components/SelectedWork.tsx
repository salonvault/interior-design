"use client";

import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Label, Photo, SectionIndex } from "./Primitives";

const projects = [
  {
    no: "02",
    title: "The Margalla",
    italic: "Residence",
    image: "margalla",
    location: "Islamabad, Pakistan",
    type: "Residential interior",
    year: "2025",
    copy: "An intimate sanctuary in the foothills. Walnut, travertine and filtered daylight connect the interior to the landscape beyond.",
  },
  {
    no: "03",
    title: "House",
    italic: "No. 27",
    image: "house27",
    location: "Lahore, Pakistan",
    type: "Architecture & interior",
    year: "2026",
    copy: "A home composed around everyday rituals. Generous volumes give way to intimate corners, bound by a warm and restrained material palette.",
  },
  {
    no: "04",
    title: "The Dining",
    italic: "Pavilion",
    image: "pavilion",
    location: "Lahore, Pakistan",
    type: "Private commission",
    year: "2026",
    copy: "The garden comes to the table. A glazed pavilion brings evening light, natural stone and the pleasure of gathering into a single room.",
  },
] as const;

export default function SelectedWork() {
  const viewport = useRef<HTMLDivElement>(null);
  function navigate(direction: number) {
    const trigger = ScrollTrigger.getById("work-sequence");
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (trigger && trigger.end > trigger.start) {
      const current = Math.round(trigger.progress * (projects.length - 1));
      const target = Math.max(
        0,
        Math.min(projects.length - 1, current + direction),
      );
      window.scrollTo({
        top:
          trigger.start +
          ((trigger.end - trigger.start) * target) / (projects.length - 1),
        behavior: reduced ? "instant" : "smooth",
      });
    } else if (viewport.current) {
      viewport.current.scrollBy({
        left: direction * viewport.current.clientWidth * 0.9,
        behavior: reduced ? "instant" : "smooth",
      });
    }
  }
  return (
    <section className="selected-work" id="selected-work">
      <div className="work-pin">
        <div className="container work-header">
          <div>
            <SectionIndex number="04">Selected environments</SectionIndex>
            <h2>
              Lives, <em>beautifully framed.</em>
            </h2>
          </div>
          <div className="work-controls">
            <button onClick={() => navigate(-1)} aria-label="Previous project">
              ←
            </button>
            <button onClick={() => navigate(1)} aria-label="Next project">
              →
            </button>
          </div>
        </div>
        <div
          className="work-viewport"
          ref={viewport}
          tabIndex={0}
          role="region"
          aria-label="Project collection. Scroll to explore."
        >
          <div className="work-track">
            {projects.map((project) => (
              <article key={project.no} className="work-project">
                <div className="work-image">
                  <Photo
                    name={project.image}
                    alt={`${project.title} ${project.italic}: contemporary interior in ${project.location}`}
                    sizes="(max-width: 767px) 90vw, 65vw"
                  />
                  <span className="work-number">{project.no}</span>
                  <span className="work-year">{project.year}</span>
                </div>
                <div className="work-info">
                  <div>
                    <Label>{project.location}</Label>
                    <h3>
                      {project.title} <em>{project.italic}</em>
                    </h3>
                  </div>
                  <div>
                    <Label>{project.type}</Label>
                    <p>{project.copy}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="container work-bottom">
          <Label>Scroll to explore the collection</Label>
          <div className="work-progress">
            <span />
          </div>
          <Label>02 — 04</Label>
        </div>
      </div>
    </section>
  );
}
