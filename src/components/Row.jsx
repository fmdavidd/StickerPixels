import React from "react";
import Pixel from "./Pixel";
import "../styles/App.css";

export default function Row(props) {
  const { width, selectedColor } = props;

  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} selectedColor={selectedColor} />);
  }

  return <div className="row">{pixels}</div>;
}