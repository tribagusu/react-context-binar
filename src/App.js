import "./App.css";
import Card from "./components/Card";
import { useState } from "react";
import { MainContext } from "./context/MainContext";
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
        </MainContext.Provider>
      </LayoutContextProvider>
    </div>
  );
}

export default App;
