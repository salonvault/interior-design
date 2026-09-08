import { Label, Photo } from "./Primitives";

export default function Hero() {
  return (
    <section
      className="hero overflow-hidden"
      id="hero"
      aria-labelledby="hero-title"
    >
      <div className="container hero-topline">
        <Label>Interior architecture & considered living</Label>
        <Label>Lahore, Pakistan · Est. 2018</Label>
      </div>
      <div className="container hero-composition">
        <h1 id="hero-title" className="hero-title">
          <span className="hero-line">The art of</span>
          <span className="hero-line hero-line-second">
            <em>feeling</em> at home.
          </span>
        </h1>
        <div className="hero-image" data-hero-image data-scroll-zoom>
          <Photo
            name="hearth"
            alt="Sunlight fills a double-height living room with a sculptural stone fireplace, walnut walls and curved ivory furniture"
            className="scroll-zoom-photo"
            priority
            sizes="(max-width: 767px) 100vw, 78vw"
          />
        </div>
        <div className="hero-side">
          <span className="hero-cross" aria-hidden="true">
            ✳
          </span>
          <p>
            Spaces to inhabit.
            <br />
            Stories to live in.
          </p>
          <span className="vertical-label">A study in belonging — Vol. 01</span>
        </div>
        <div className="hero-image-caption">
          <Label>House No. 27</Label>
          <span>Private residence, Lahore</span>
          <span aria-hidden="true">01 — 04</span>
        </div>
      </div>
      <div className="container hero-bottom">
        <p>
          Architecture is the beginning.
          <br />
          How it makes you feel is everything.
        </p>
        <a href="#introduction" className="scroll-link">
          <span>Enter the atelier</span>
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
