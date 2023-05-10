"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalPortalProps {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  useEffect(() => {
    const originStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originStyle;
    };
  }, []);

  if (typeof window === "undefined") return null;

  const node = document.getElementById("portal") as Element;
  return createPortal(children, node);
};

export default ModalPortal;
