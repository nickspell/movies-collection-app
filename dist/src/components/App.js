import React, { Component } from 'react';
import NavBar from "./navbar/NavBar";
import GridPage from "./gridpage/GridPage";
import { Route, Switch } from "react-router-dom";
import DetailPage from "./detailpage/DetailPage";
import Page404 from "./errorpage/Page404";
import AddEditPage from "./addeditpage/AddEditPage";

const App = () => React.createElement(
    "div",
    null,
    React.createElement(NavBar, null),
    React.createElement(
        Switch,
        null,
        React.createElement(Route, { exact: true, path: "/", component: GridPage }),
        React.createElement(Route, { path: "/movie/:id", component: DetailPage }),
        React.createElement(Route, { path: "/add/:id?", component: AddEditPage }),
        React.createElement(Route, { path: "*", component: Page404 })
    )
);

export default App;
//# sourceMappingURL=App.js.map