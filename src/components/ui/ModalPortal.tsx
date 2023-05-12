"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import usePortal from "~/hooks/usePortal";

interface ModalPortalProps {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  const node = usePortal("modal");

  useEffect(() => {
    const originStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originStyle;
    };
  }, []);

  if (!node) return null;

  return createPortal(children, node);
};

export default ModalPortal;
