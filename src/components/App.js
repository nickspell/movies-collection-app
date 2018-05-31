import React, { Component } from 'react';
import NavBar from "./NavBar";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
          <NavBar/>
          <Header/>
      </div>
    );
  }
}

export default App;
