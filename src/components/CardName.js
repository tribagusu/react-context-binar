import { useContext } from "react";
import { MainContext2 } from "../context/MainContext2";
// import { MainContext } from "../context/MainContext";
import { LayoutContext2 } from "../context/LayoutContext2";

const CardName = () => {
  const { data } = useContext(MainContext2);
  // const { name } = useContext(MainContext);
  const { nightmode, day, night } = useContext(LayoutContext2);

  const mood = nightmode ? night : day;

  return (
    <div>
      <h1 style={{ color: mood.color }}>{data.name}</h1>
      {/* <h1 style={{ color: mood.color }}>{name}</h1> */}
    </div>
  );
};

export default CardName;
