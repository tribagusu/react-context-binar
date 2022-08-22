import React, { Component, createContext } from "react";

export const MainContext = createContext({
  empty: true,
});
class MainContextProvider extends Component {
  state = {
    name: "My Name",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  };

  render() {
    return (
      <MainContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </MainContext.Provider>
    );
  }
}

export default MainContextProvider;
