import { useEffect, useState } from "react";

const createElement = (id: string): HTMLElement => {
  const element = document.createElement("div");
  element.setAttribute("id", id);
  return element;
};

const isBrowser = (): boolean => {
  return Boolean(
    typeof window !== "undefined" &&
      window.document &&
      window.document.createElement
  );
};

const usePortal = (selectId: string): HTMLElement | null => {
  const id = `${selectId}`;

  const [elementSnapshot, setElementSnapshot] = useState<HTMLElement | null>(
    isBrowser() ? createElement(id) : null
  );

  useEffect(() => {
    const parentElement = document.body;
    const hasElement = parentElement?.querySelector<HTMLElement>(`#${id}`);
    const element = hasElement || createElement(id);

    if (!hasElement) {
      parentElement.appendChild(element);
    }
    setElementSnapshot(element);
  }, [id]);

  return elementSnapshot;
};

export default usePortal;
