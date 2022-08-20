import "./App.css";
import Card from "./components/Card";
import { useState } from "react";
import { MainContext } from "./context/MainContext";
import Toggle from "./components/Toggle";
import LayoutContextProvider from "./context/LayoutContext";

function App() {
  const [data, setData] = useState({
    name: "bagus",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  });

  const MainContextValue = {
    data,
  };
  return (
    <div>
      <LayoutContextProvider>
        <MainContext.Provider value={MainContextValue}>
          <Card />
          <Toggle />
        </MainContext.Provider>
      </LayoutContextProvider>
    </div>
  );
}

export default App;
