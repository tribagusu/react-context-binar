import React, { useContext } from "react";
import { LayoutContext2 } from "../context/LayoutContext2";

const Toggle = () => {
  const { handleToggle, nightmode } = useContext(LayoutContext2);

  return (
    <div>
      <button onClick={handleToggle}>
        Change to {nightmode ? "Day Mode" : "Night Mode"}
      </button>
    </div>
  );
};

export default Toggle;
