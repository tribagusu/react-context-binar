import { useContext } from "react";
import { MainContext } from "../context/MainContext";

const CardName = () => {
  const context = useContext(MainContext);
  return (
    <div>
      <h1>{context.data.name}</h1>
    </div>
  );
};

export default CardName;
