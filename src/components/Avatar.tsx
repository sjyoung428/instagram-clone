import React from "react";

interface AvatarProps {
  image?: string | null;
}

const Avatar = ({ image }: AvatarProps) => {
  return (
    <div className="w-9 h-9 rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 ">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="rounded-full p-[0.1rem]"
        alt="user profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer" // 외부 링크 이미지 엑스박스 뜨는거 방지
      />
    </div>
  );
};

export default Avatar;
