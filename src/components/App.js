// @flow
import React from 'react';
import NavBar from "./navbar/NavBar";
import GridPage from "./gridpage/GridPage";
import {Route, Switch} from "react-router-dom";
import DetailPageContainer from "./detailpage/DetailPageContainer";
import Page404Container from "./errorpage/Page404Container";
import AddEditPageContainer from "./addeditpage/AddEditPageContainer";



const App =()=>
      <div>
          <NavBar/>
          <Switch>
              <Route exact path='/' component={GridPage}/>
              <Route path="/movie/:id" component={DetailPageContainer}/>
              <Route path="/add/:id?" component={AddEditPageContainer}/>
              <Route path="*" component={Page404Container}/>
          </Switch>
      </div>;

export default App;
