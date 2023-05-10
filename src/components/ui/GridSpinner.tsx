import dynamic from "next/dynamic";
import React from "react";

const GridLoader = dynamic(
  () => import("react-spinners").then(({ GridLoader }) => GridLoader),
  {
    ssr: false,
  }
);
interface GridSpinnerProps {
  color?: string;
}

const GridSpinner = ({ color = "red" }: GridSpinnerProps) => {
  return <GridLoader color={color} />;
};

export default GridSpinner;
