import React, { createContext, useState } from "react";

export const MainContext2 = createContext({
  empty: true,
});
const MainContextProvider2 = ({ children }) => {
  const [data, setData] = useState({
    name: "My Name",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  });

  return (
    <MainContext2.Provider value={{ data }}>{children}</MainContext2.Provider>
  );
};

export default MainContextProvider2;
