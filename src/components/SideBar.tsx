import React from "react";
import { User } from "~/models/user";
import Avatar from "./Avatar";

interface SideBarProps {
  user: User;
}

const SideBar = ({ user: { name, username, image } }: SideBarProps) => {
  return (
    <>
      <div className="flex item-center">
        {image && <Avatar image={image} />}
        <div className="ml-4">
          <p className="font-bold">{username}</p>
          <p className="text-lg text-neutral-500 leading-4">{name}</p>
        </div>
      </div>
      <p className="text-sm text-neutral-500 mt-8">
        About ﹒ Help ﹒ Press ﹒ API ﹒ Jobs ﹒ Privacy ﹒ Terms ﹒ Locations
        ﹒ Language
      </p>
      <p className="font-bold text-sm mt-8 text-neutral-500">
        @Copyright INSTANTGRAM from METAL
      </p>
    </>
  );
};

export default SideBar;
