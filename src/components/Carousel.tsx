import Card from "./Card";
import { DataItem } from "../context/AppContext";

interface CarouselProps {
  cards: DataItem[];
}
function Carousel({ cards }: CarouselProps) {
  return (
    <>
      {cards
        .filter((f) => f.active === true)
        .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
        .map((card) => (
          <Card
            key={card.id}
            img={card.srcImg}
            title={card.title}
            body={card.body}
            id={card.id}
          />
        ))}
    </>
  );
}

export default Carousel;
