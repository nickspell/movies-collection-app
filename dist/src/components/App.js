import React, { Component } from 'react';
import NavBar from "./NavBar";
import Header from "./Header";
import MainPage from "./MainPage";

class App extends Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(NavBar, null),
      React.createElement(Header, null),
      React.createElement(MainPage, null)
    );
  }
}

export default App;
//# sourceMappingURL=App.js.map