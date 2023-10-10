import React from "react";

interface LeftArrowProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const LeftArrow = ({ onClick }: LeftArrowProps) => {
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
          d="M30.7912 23.005H19.6212L24.5012 18.125C24.8912 17.735 24.8912 17.095 24.5012 16.705C24.1112 16.315 23.4812 16.315 23.0912 16.705L16.5012 23.295C16.1112 23.685 16.1112 24.315 16.5012 24.705L23.0912 31.295C23.4812 31.685 24.1112 31.685 24.5012 31.295C24.8912 30.905 24.8912 30.275 24.5012 29.885L19.6212 25.005H30.7912C31.3412 25.005 31.7912 24.555 31.7912 24.005C31.7912 23.455 31.3412 23.005 30.7912 23.005Z"
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

export default LeftArrow;
