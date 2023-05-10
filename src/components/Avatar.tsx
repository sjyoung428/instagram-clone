import React from "react";

type AvatarSize = "small" | "medium" | "large";

interface AvatarProps {
  image?: string | null;
  size?: AvatarSize;
  highlight?: boolean;
}

const Avatar = ({ image, size = "large", highlight = false }: AvatarProps) => {
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

const getContainerStyle = (size: AvatarSize, highlight: boolean) => {
  const baseStyle = "rounded-full flex justify-center items-center";
  const highlightStyle = highlight
    ? "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
    : "";
  const sizeStyle = getContaierStyle(size);

  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
};

const getContaierStyle = (size: AvatarSize) => {
  switch (size) {
    case "small":
      return "w-9 h-9";
    case "medium":
      return "w-11 h-11";
    case "large":
      return "w-[68px] h-[68px]";
  }
};

const getImageSizeStyle = (size: AvatarSize) => {
  switch (size) {
    case "small":
      return "w-[34px] h-[34px]  p-[0.1rem]";
    case "medium":
      return "w-[42px] h-[42px]  p-[0.1rem]";
    case "large":
      return "w-16 h-16  p-[0.2rem]";
  }
};
