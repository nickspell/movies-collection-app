import React, { Component } from 'react';
import NavBar from "./NavBar";
import Header from "./Header";
import MainPage from "./MainPage";

class App extends Component {
  render() {
    return (
      <div>
          <NavBar/>
          <Header/>
          <MainPage/>
      </div>
    );
  }
}

export default App;
