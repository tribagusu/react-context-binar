import React, { useState, createContext } from "react";

export const LayoutContext2 = createContext();

const LayoutContextProvider = ({ children }) => {
  const [nightmode, setNightmode] = useState(false);

  const [day, setDay] = useState({
    color: "#000",
    background: "red",
  });
  const [night, setNight] = useState({
    color: "#fff",
    background: "#000",
  });

  const handleToggle = () => {
    setNightmode(!nightmode);
  };

  return (
    <LayoutContext2.Provider value={{ nightmode, night, day, handleToggle }}>
      {children}
    </LayoutContext2.Provider>
  );
};

export default LayoutContextProvider;
