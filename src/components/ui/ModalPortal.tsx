import React from "react";
import { createPortal } from "react-dom";

interface ModalPortalProps {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  if (typeof window === "undefined") return null;

  const node = document.getElementById("portal") as Element;
  return createPortal(children, node);
};

export default ModalPortal;
