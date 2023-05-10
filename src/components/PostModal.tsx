import React from "react";
import CloseIcon from "./ui/icons/CloseIcon";

interface PostModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const PostModal = ({ children, onClose }: PostModalProps) => {
  return (
    <section
      className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full z-50 bg-neutral-900/70"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <button className="fixed top-0 right-0 p-8 text-white" onClick={onClose}>
        <CloseIcon />
      </button>
      {children}
    </section>
  );
};

export default PostModal;
