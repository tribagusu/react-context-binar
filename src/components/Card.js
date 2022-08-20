import React, { useContext } from "react";
import CardImage from "./CardImage";
import CardName from "./CardName";
import Toggle from "./Toggle";
import { LayoutContext } from "../context/LayoutContext";

const Card = () => {
  const { nightmode, day, night } = useContext(LayoutContext);

  const mood = nightmode ? night : day;
  return (
    <div style={{ backgroundColor: mood.background }}>
      <CardName />
      <CardImage />
      <Toggle />
    </div>
  );
};

export default Card;
