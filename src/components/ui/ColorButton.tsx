import React from "react";

interface ColorButtonProps {
  text: string;
  onClick: () => void;
  size?: "small" | "big";
}

const ColorButton = ({ text, onClick, size = "small" }: ColorButtonProps) => {
  return (
    <div
      className={`rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 
        ${size === "big" ? "p-[0.3rem]" : "p-[0.15rem]"}
      `}
    >
      <button
        className={`bg-white rounded-sm hover:opacity-90 transition-opacity
          ${size === "big" ? "p-4 text-2xl" : "text-base p-[0.3rem]"}
        `}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default ColorButton;
