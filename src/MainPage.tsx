import { useContext, useState } from "react";
import { AppContext } from "./context/AppContext";
import Carousel from "./components/Carousel";
import Slider from "./components/Slider";
import RightArrow from "./assets/RightArrow";
import LeftArrow from "./assets/LeftArrow";
import "./App.css";

const MainPage = () => {
  const data = useContext(AppContext);

  const [cards, setCards] = useState(data);

  const handleLeftClick = () => {
    const prevState = [...cards];
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].id;
    prevState.find((f) => f.active === false)!.active = true;
    prevState.find((f) => f.id === nextCardIdx)!.active = false;
    prevState.find((f) => f.id === nextCardIdx)!.pos =
      Math.max.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) + 1;

    setCards(prevState);
  };

  const handleRightClick = () => {
    const prevState = [...cards];
    const activeCards = prevState.filter((ft) => ft.active === true);
    let nextCardIdx: number | undefined;

    if (activeCards.length > 0) {
      const sortedCards = activeCards.sort((a, b) => a.pos - b.pos);
      nextCardIdx = sortedCards.pop()!.id;
    } else {
      nextCardIdx = undefined;
    }

    prevState.find((f) => f.active === false)!.pos =
      Math.min.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) - 1;
    prevState.find((f) => f.active === false)!.active = true;
    prevState.find((f) => f.id === nextCardIdx)!.active = false;

    setCards(prevState);
  };

  return (
    <div className="bg-customBlue h-screen">
      <div className=" py-8 lg:py-16 px-6 lg:px-36 flex justify-between">
        <div className="self-center w-full text-center lg:text-left">
          <p className="font-avenir-next text-4xl inline text-white">
            Explore the <strong>latest business I.T. insights</strong>
          </p>
        </div>
        <div className="w-32 justify-between hidden lg:flex">
          <LeftArrow onClick={handleLeftClick} />
          <RightArrow onClick={handleRightClick} />
        </div>
      </div>
      <div className="px-36 w-full overflow-x-auto whitespace-no-wrap lg:flex justify-between hidden">
        <Carousel cards={cards} />
      </div>
      <div className=" lg:hidden">
        <Slider cards={cards} />
      </div>
    </div>
  );
};

export default MainPage;
