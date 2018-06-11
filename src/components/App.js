// @flow
import React from 'react';
import NavBar from "./navbar/NavBar";
import GridPage from "./gridpage/GridPage";
import {Route, Switch} from "react-router-dom";
import DetailPageContainer from "./detailpage/DetailPageContainer";
import Page404Container from "./errorpage/Page404Container";
import AddEditPageContainer from "./addeditpage/AddEditPageContainer";
import Footer from "./Footer";



const App =()=>
      <div className={'mainContainer'}>
          <NavBar/>
          <div style={{flex:1}} >
              <Switch>
                  <Route exact path='/' component={GridPage}/>
                  <Route path="/movie/:id" component={DetailPageContainer}/>
                  <Route path="/add/:id?" component={AddEditPageContainer}/>
                  <Route path="*" component={Page404Container}/>
              </Switch>
          </div>
          <Footer/>
      </div>;

export default App;
