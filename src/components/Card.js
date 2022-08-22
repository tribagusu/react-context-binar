import React, { useContext } from "react";
import CardImage from "./CardImage";
import CardName from "./CardName";
import Toggle from "./Toggle";
import { LayoutContext2 } from "../context/LayoutContext2";

const Card = () => {
  const { nightmode, day, night } = useContext(LayoutContext2);

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
