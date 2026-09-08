import { Photo, SectionIndex, TextLink, Label } from "./Primitives";

export default function Studio() {
  return (
    <section className="studio container" id="studio">
      <SectionIndex number="02">Inside the atelier</SectionIndex>
      <h2 className="studio-title" data-reveal>
        Not just a place.
        <br />
        <span>
          A way of <em>being.</em>
        </span>
      </h2>
      <div className="studio-layout">
        <figure className="studio-figure">
          <div data-scroll-zoom>
            <Photo
              name="stair"
              alt="Cantilevered travertine staircase with a slender bronze handrail"
              className="studio-photo scroll-zoom-photo"
            />
          </div>
          <figcaption>
            <Label>Fig. 02 — The poetry of proportion</Label>
            <span>Lahore / Pakistan</span>
          </figcaption>
        </figure>
        <div className="studio-copy" data-reveal>
          <Label>Rooted in place. Open to possibility.</Label>
          <p className="studio-lede">
            We believe the most meaningful spaces begin with a simple act:{" "}
            <em>listening.</em>
          </p>
          <p>
            To the way you live. To the light that enters a room. To the
            materials that belong to a place. From the first conversation to the
            final hand-finished detail, we design around life.
          </p>
          <p>
            Our Lahore atelier brings architecture, interiors and bespoke
            objects into one considered practice. Local craft, contemporary
            expression, and nothing without a reason.
          </p>
          <TextLink href="#contact">Meet your next space</TextLink>
        </div>
        <span className="studio-margin-note" aria-hidden="true">
          Form follows feeling.
        </span>
      </div>
    </section>
  );
}
