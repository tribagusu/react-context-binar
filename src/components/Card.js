import React from "react";
import CardImage from "./CardImage";
import CardName from "./CardName";

const Card = () => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <CardName />
      <CardImage />
    </div>
  );
};

export default Card;
