import React from "react";

interface RightArrowProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const RightArrow: React.FC<RightArrowProps> = ({ onClick }) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.2087 25H28.3787L23.4987 29.88C23.1087 30.27 23.1087 30.91 23.4987 31.3C23.8887 31.69 24.5187 31.69 24.9087 31.3L31.4987 24.71C31.8887 24.32 31.8887 23.69 31.4987 23.3L24.9187 16.7C24.5287 16.31 23.8987 16.31 23.5087 16.7C23.1187 17.09 23.1187 17.72 23.5087 18.11L28.3787 23H17.2087C16.6587 23 16.2087 23.45 16.2087 24C16.2087 24.55 16.6587 25 17.2087 25Z"
          fill="white"
        />
        <rect
          x="1.5"
          y="1.5"
          width="45"
          height="45"
          rx="22.5"
          stroke="white"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};

export default RightArrow;
