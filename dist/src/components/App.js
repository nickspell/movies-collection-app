import React, { Component } from 'react';
import NavBar from "./NavBar";
import Header from "./Header";

class App extends Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(NavBar, null),
      React.createElement(Header, null)
    );
  }
}

export default App;
//# sourceMappingURL=App.js.map