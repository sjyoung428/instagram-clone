import React from "react";

interface AvatarProps {
  image?: string | null;
  size?: "small" | "normal";
  highlight?: boolean;
}

const Avatar = ({ image, size = "normal", highlight = false }: AvatarProps) => {
  return (
    <div className={getContainerStyle(size, highlight)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`bg-white object-cover rounded-full ${getImageSizeStyle(
          size
        )}`}
        alt="user profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer" // 외부 링크 이미지 엑스박스 뜨는거 방지
      />
    </div>
  );
};

export default Avatar;

const getContainerStyle = (size: string, highlight: boolean) => {
  const baseStyle = "rounded-full flex justify-center items-center";
  const highlightStyle = highlight
    ? "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
    : "";
  const sizeStyle = size === "small" ? "w-9 h-9" : "w-[68px] h-[68px]";

  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
};

const getImageSizeStyle = (size: string) => {
  return size === "small"
    ? "w-[34px] h-[34px]  p-[0.1rem]"
    : "w-16 h-16  p-[0.2rem] ";
};
