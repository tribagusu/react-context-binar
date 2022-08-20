import "./App.css";
import Card from "./components/Card";
import { useState } from "react";
import { mainContext } from "./context/mainContext";

function App() {
  const [data, setData] = useState({
    name: "bagus",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  });

  const mainContextValue = {
    data,
  };
  return (
    <div>
      <mainContext.Provider value={mainContextValue}>
        <Card />
      </mainContext.Provider>
    </div>
  );
}

export default App;
