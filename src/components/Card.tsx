import ForwardArrow from "../assets/ForwardArrow";

interface CardProps {
  title: string;
  body: string;
  img: string;
  id: number;
}

const Card = ({ title, body, img, id }: CardProps) => {
  return (
    <div
      className={`w-270 rounded-lg mx-auto lg:mx-0 h-auto mb-8 lg:mb-0 ${
        id % 2 === 0 && "mt-8"
      }`}
    >
      <img src={img} className="rounded-tl-lg rounded-tr-lg" />
      <div className="p-4 bg-white rounded-bl-lg rounded-br-lg">
        <h4 className="font-nunito text-2xl font-normal mt-6 mb-2">{title}</h4>
        <p className="font-nunito text-lg font-normal pt-1 pb-4 text-gray-600">
          {body}
        </p>
        <div className="flex items-center">
          <a
            className="text-blue-500 underline mr-1"
            href="https://www.figma.com/exit?url=https%3A%2F%2Fcwc-my.sharepoint.com%2F%3Ab%3A%2Fp%2Fwilliam_suarez%2FEW5moWIz1C1AgX6gjcJEeNQBUcQNlnrqoYEXB9mPolfehA%3Fe%3DOXJkUg"
          >
            Learn more
          </a>
          <ForwardArrow />
        </div>
      </div>
    </div>
  );
};

export default Card;
