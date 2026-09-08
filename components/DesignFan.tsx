import CardFanCarousel, { type CardItem } from "./ui/card-fan-carousel";

const cards: CardItem[] = [
  {
    imgUrl: "/images/interior/design1.jpeg",
    alt: "Portrait interior design study with refined furniture and warm materiality",
  },
  {
    imgUrl: "/images/interior/design2.png",
    alt: "Portrait interior design study with contemporary residential details",
  },
  {
    imgUrl: "/images/interior/design3.png",
    alt: "Portrait interior scene with soft light and sculptural furniture",
  },
  {
    imgUrl: "/images/interior/design4.png",
    alt: "Portrait interior composition with quiet luxury and natural texture",
  },
  {
    imgUrl: "/images/interior/design5.png",
    alt: "Portrait interior furniture setting in warm sunlight",
  },
  {
    imgUrl: "/images/interior/design6.jpeg",
    alt: "Portrait walnut furniture setting in a calm living room",
  },
  {
    imgUrl: "/images/interior/design7.jpeg",
    alt: "Portrait restroom interior with stone and warm contemporary finishes",
  },
  {
    imgUrl: "/images/interior/design8.jpeg",
    alt: "Portrait interior with layered textiles and quiet natural light",
  },
  {
    imgUrl: "/images/interior/design9.jpeg",
    alt: "Portrait modern interior with sculptural furniture and warm tones",
  },
  {
    imgUrl: "/images/interior/design%2010.jpeg",
    alt: "Portrait interior detail with moody lighting and refined finishes",
  },
];

export default function DesignFan() {
  return (
    <section className="design-fan" aria-labelledby="design-fan-title">
      <div className="container">
        <div className="design-fan-heading">
          <h2 id="design-fan-title" data-reveal>
            A quiet
            <em className="ms-3">visual index.</em>
          </h2>
        </div>
      </div>
      <CardFanCarousel cards={cards} />
    </section>
  );
}
