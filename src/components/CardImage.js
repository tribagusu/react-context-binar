import { useContext } from "react";
import { MainContext2 } from "../context/MainContext2";
// import { MainContext } from "../context/MainContext";
const CardImage = () => {
  const { data } = useContext(MainContext2);
  // const { avatar } = useContext(MainContext);
  return (
    <div>
      <img src={data.avatar} alt="" />
      {/* <img src={avatar} alt="" /> */}
    </div>
  );
};

export default CardImage;
