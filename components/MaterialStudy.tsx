"use client";

import Image from "next/image";
import { useState } from "react";
import travertineImage from "@/public/images/travertine.png";
import walnutImage from "@/public/images/walnut.png";
import { Label, SectionIndex } from "./Primitives";

const materials = [
  {
    name: "Travertine",
    place: "Honed stone / open grain",
    texture: "travertine",
    image: travertineImage,
    alt: "Travertine furniture pieces in a warm contemporary interior",
    copy: "A surface that remembers the earth. Open pores, quiet variations, a warmth no imitation can hold.",
  },
  {
    name: "Walnut",
    place: "Native timber / natural finish",
    texture: "walnut",
    image: walnutImage,
    alt: "Walnut furniture in a warm contemporary living room",
    copy: "Time written into timber. Deep grain and a living finish that becomes more personal with every passing year.",
  },
];

export default function MaterialStudy() {
  const [active, setActive] = useState(0);
  const material = materials[active];

  return (
    <section className="material-section" id="philosophy">
      <div className="container">
        <SectionIndex number="03">The language of matter</SectionIndex>
        <div className="material-layout">
          <div className="material-copy">
            <Label>Honest materials. Lasting emotion.</Label>
            <h2 data-reveal>
              Nothing
              <br />
              extra.
              <br />
              <em>
                Everything
                <br />
                essential.
              </em>
            </h2>
            <p>
              Light gives it life. Proportion gives it rhythm. Material gives it
              a soul.
            </p>
            <div
              className="material-options"
              role="group"
              aria-label="Choose a material"
            >
              {materials.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  aria-pressed={active === i}
                  onClick={() => setActive(i)}
                >
                  <span className={`material-swatch ${item.texture}`} />
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="material-exhibit">
            <span className="exhibit-coordinate">OBJECT STUDY - 003</span>
            <div className=" material-image scroll-zoom-photo" data-scroll-zoom>
              <Image
                src={material.image}
                alt={material.alt}
                fill
                sizes="(max-width: 767px) 240px, 320px"
                placeholder="blur"
                className="object-cover"
              />
            </div>
            <div className="material-caption" aria-live="polite">
              <div>
                <h3>{material.name}</h3>
                <Label>{material.place}</Label>
              </div>
              <p>{material.copy}</p>
            </div>
            <span className="exhibit-guide">
              An exploration of surface, grain and depth.
            </span>
          </div>
        </div>
        <div className="philosophy-words" aria-label="Our principles">
          <span>Material</span>
          <span>Light</span>
          <span>Proportion</span>
          <span>Emotion</span>
        </div>
      </div>
    </section>
  );
}
