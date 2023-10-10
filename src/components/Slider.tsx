import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { DataItem } from "../context/AppContext";
import Card from "./Card";
import "swiper/css/pagination";
import "swiper/css";

interface SliderProps {
  cards: DataItem[];
}

const Slider = ({ cards }: SliderProps) => {
  return (
    <Swiper
      spaceBetween={20}
      pagination={{
        clickable: true,
        bulletActiveClass: "bg-lightBlue",
      }}
      slidesPerView={1}
      modules={[Pagination]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id}>
          <Card
            key={card.id}
            img={card.srcImg}
            title={card.title}
            body={card.body}
            id={card.id}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
