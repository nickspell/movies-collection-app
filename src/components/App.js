// @flow
import React, { Component } from 'react';
import NavBar from "./navbar/NavBar";
import GridPage from "./gridpage/GridPage";
import {Route, Switch} from "react-router-dom";
import DetailPage from "./detailpage/DetailPage";
import Page404 from "./errorpage/Page404";
import AddEditPage from "./addeditpage/AddEditPage";


const App =()=>
      <div>
          <NavBar/>
          <Switch>
              <Route exact path='/' component={GridPage}/>
              <Route path="/movie/:id" component={DetailPage}/>
              <Route path="/add/:id?" component={AddEditPage}/>
              <Route path="*" component={Page404}/>
          </Switch>
      </div>;

export default App;
