import "./App.css";
import Card from "./components/Card";
import MainContextProvider from "./context/MainContext2";
import LayoutContextProvider from "./context/LayoutContext2";

function App() {
  return (
    <div>
      <LayoutContextProvider>
        <MainContextProvider>
          <Card />
        </MainContextProvider>
      </LayoutContextProvider>
    </div>
  );
}

export default App;
