import "./App.css";
import Card from "./components/Card";
import MainContextProvider2 from "./context/MainContext2";
// import MainContextProvider from "./context/MainContext";
import LayoutContextProvider from "./context/LayoutContext2";

function App() {
  return (
    <div>
      <LayoutContextProvider>
        <MainContextProvider2>
          {/* <MainContextProvider> */}
          <Card />
          {/* </MainContextProvider> */}
        </MainContextProvider2>
      </LayoutContextProvider>
    </div>
  );
}

export default App;
