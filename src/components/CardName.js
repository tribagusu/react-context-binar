import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import { LayoutContext2 } from "../context/LayoutContext2";

const CardName = () => {
  const context = useContext(MainContext);
  const { nightmode, day, night } = useContext(LayoutContext2);

  const mood = nightmode ? night : day;

  return (
    <div>
      <h1 style={{ color: mood.color }}>{context.data.name}</h1>
    </div>
  );
};

export default CardName;
