import React, { Component, createContext } from "react";

export const LayoutContext = createContext();
class LayoutContextProvider extends Component {
  state = {
    nightmode: false,
    day: {
      color: "#000",
      background: "red",
    },
    night: {
      color: "#fff",
      background: "#000",
    },
  };

  handleToggle = () => {
    this.setState({
      nightmode: !this.state.nightmode,
    });
  };

  render() {
    return (
      <LayoutContext.Provider
        value={{ ...this.state, handleToggle: this.handleToggle }}
      >
        {this.props.children}
      </LayoutContext.Provider>
    );
  }
}

export default LayoutContextProvider;
