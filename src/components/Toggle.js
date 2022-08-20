import React, { useContext } from "react";
import { LayoutContext } from "../context/LayoutContext";

const Toggle = () => {
  const { handleToggle, nightmode } = useContext(LayoutContext);

  return (
    <div>
      <button onClick={handleToggle}>
        Change to {nightmode ? "Day Mode" : "Night Mode"}
      </button>
    </div>
  );
};

export default Toggle;
