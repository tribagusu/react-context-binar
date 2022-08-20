import "./App.css";
import Card from "./components/Card";
import { useState } from "react";
import { MainContext } from "./context/MainContext";

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
      <MainContext.Provider value={MainContextValue}>
        <Card />
      </MainContext.Provider>
    </div>
  );
}

export default App;
