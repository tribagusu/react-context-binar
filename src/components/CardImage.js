import { useContext } from "react";
import { MainContext2 } from "../context/MainContext2";
const CardImage = () => {
  const { data } = useContext(MainContext2);
  return (
    <div>
      <img src={data.avatar} alt="" />
    </div>
  );
};

export default CardImage;
