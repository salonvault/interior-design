import { Label, Photo, SectionIndex } from "./Primitives";

const stages = [
  {
    title: "A conversation.",
    sub: "Listen & discover",
    copy: "Before we draw a line, we listen. Your rituals, your ambitions, the small things that make a place yours.",
    image: "style1",
  },
  {
    title: "A possibility.",
    sub: "Imagine & refine",
    copy: "Ideas take shape through plans, material studies and light. We question, edit and refine until every decision belongs.",
    image: "style2",
  },
  {
    title: "A place of your own.",
    sub: "Craft & complete",
    copy: "Close collaboration with makers brings the vision to life. Stone by stone, joint by joint, until the space is ready for you.",
    image: "style3",
  },
] as const;

export default function Process() {
  return (
    <section className="process container" id="process">
      <SectionIndex number="05">From thought to feeling</SectionIndex>
      <div className="process-heading">
        <h2 data-reveal>
          Good things
          <br />
          take <em>intention.</em>
        </h2>
        <p>
          A considered journey.
          <br />A shared vision.
          <br />A home that could only be yours.
        </p>
      </div>
      <div className="process-stages">
        {stages.map((stage, i) => (
          <article
            className="process-stage"
            key={stage.title}
            data-process-stage
          >
            <div className="process-stage-number">
              <span>0{i + 1}</span>
              <span className="process-line" />
            </div>
            <div className="process-stage-copy">
              <Label>{stage.sub}</Label>
              <h3>{stage.title}</h3>
              <p>{stage.copy}</p>
            </div>
            <Photo
              name={stage.image}
              alt={`Material and interior study: ${stage.sub}`}
              className="process-photo"
              sizes="(max-width: 767px) 70vw, 25vw"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
