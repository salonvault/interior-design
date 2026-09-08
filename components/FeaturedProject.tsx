import { Label, Photo } from "./Primitives";

export default function FeaturedProject() {
  return (
    <section
      className="featured overflow-hidden"
      id="residence"
      aria-labelledby="featured-title"
    >
      <div className="featured-frame" data-expand-image data-scroll-zoom>
        <Photo
          name="courtyard"
          alt="A contemporary courtyard residence with a reflecting pool, stone walls and warm evening light"
          className="scroll-zoom-photo"
          sizes="100vw"
        />
        <div className="featured-shade" />
        <div className="container featured-top">
          <Label>In focus / 2026</Label>
          <Label>Architecture + Interiors</Label>
        </div>
        <div className="container featured-bottom">
          <div>
            <Label>Private residence — Lahore</Label>
            <h2 id="featured-title" data-reveal>
              A world
              <br />
              <em>within.</em>
            </h2>
          </div>
          <div className="featured-note">
            <span className="large-number">01</span>
            <p>
              The Courtyard House.
              <br />
              An inward-looking home, open to the sky. Stone, shadow and water
              in quiet conversation.
            </p>
            <a href="#selected-work" className="text-link">
              <span>Discover the collection</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container featured-colophon">
        <span>31°31′ N · 74°21′ E</span>
        <span>A dialogue between shelter and openness.</span>
        <span>Interior / Selected environments</span>
      </div>
    </section>
  );
}
