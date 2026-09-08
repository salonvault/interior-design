import { getImageProps } from "next/image";
import type { CSSProperties } from "react";
import introDesktop from "@/public/images/hero_intro-desktop.png";
import introMobile from "@/public/images/hero_intro-mobile.png";
import outroDesktop from "@/public/images/hero-outro-desktop.png";
import outroMobile from "@/public/images/hero-outro-mobile.png";

type ArtworkKind = "intro" | "outro";

const stripCount = 10;

function HeroArtwork({
  kind,
  alt,
  priority = false,
}: {
  kind: ArtworkKind;
  alt: string;
  priority?: boolean;
}) {
  const desktopSource = kind === "intro" ? introDesktop : outroDesktop;
  const mobileSource = kind === "intro" ? introMobile : outroMobile;
  const shared = { alt, sizes: "100vw", quality: 90 };
  const {
    props: { srcSet: mobileSrcSet },
  } = getImageProps({ src: mobileSource, ...shared });
  const { props: desktopProps } = getImageProps({
    src: desktopSource,
    ...shared,
    fetchPriority: priority ? "high" : undefined,
  });

  return (
    <picture className="hero1-picture">
      <source media="(max-width: 767px)" srcSet={mobileSrcSet} />
      <img {...desktopProps} className="hero1-artwork" alt={alt} />
    </picture>
  );
}

export default function Hero1() {
  return (
    <section className="hero1" id="top" aria-label="Interior entrance">
      <div className="hero1-stage">
        <div className="hero1-outro" data-hero1-outro>
          <HeroArtwork
            kind="outro"
            alt="Warm interior living room with arched openings and sculptural furniture"
            priority
          />
        </div>

        <div className="hero1-intro" data-hero1-intro aria-hidden="true">
          <HeroArtwork kind="intro" alt="" priority />
        </div>

        <div className="hero1-brand" data-hero1-chrome aria-hidden="true">
          <span>Interior</span>
          <small>Atelier</small>
        </div>

        <div className="hero1-scroll" data-hero1-chrome aria-hidden="true">
          <span>Scroll to enter</span>
          <i />
        </div>

        <div className="hero1-counter" data-hero1-chrome aria-hidden="true">
          <span>00</span>
          <span>01</span>
        </div>

        <div className="hero1-reveal" data-hero1-reveal aria-hidden="true">
          {Array.from({ length: stripCount }, (_, index) => (
            <div
              className="hero1-strip"
              data-hero1-strip
              key={index}
              style={{ "--strip": index } as CSSProperties}
            >
              <div className="hero1-strip-artwork">
                <HeroArtwork kind="intro" alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
