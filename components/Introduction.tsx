import { Label, SectionIndex } from "./Primitives";

export default function Introduction() {
  return (
    <section id="introduction" className="introduction container">
      <SectionIndex number="01">A quieter kind of luxury</SectionIndex>
      <div className="intro-statement" data-reveal>
        <h2>
          Some spaces are seen.
          <br />
          Others are <em>felt.</em>
        </h2>
      </div>
      <div className="intro-foot">
        <Label>A place for life to unfold.</Label>
        <p>
          We are Interior, an independent interior architecture studio. We bring a
          thoughtful eye and a human instinct to the places we call our own.
          Less spectacle. More substance. A lasting sense of belonging.
        </p>
      </div>
    </section>
  );
}
