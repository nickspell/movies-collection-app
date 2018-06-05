// @flow
import React, { Component } from 'react';
import NavBar from "./navbar/NavBar";
import GridPage from "./gridpage/GridPage";
import {Route, Switch} from "react-router-dom";
import DetailPage from "./detailpage/DetailPage";


const App =()=>
      <div>
          <NavBar/>
          <Switch>
              <Route exact path='/' component={GridPage}/>
              <Route path="/movie/:id" component={DetailPage}/>
          </Switch>
      </div>;

export default App;
