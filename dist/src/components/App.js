import React, { Component } from 'react';
import NavBar from "./navbar/NavBar";
import GridPage from "./gridpage/GridPage";
import { Route, Switch } from "react-router-dom";
import DetailPage from "./detailpage/DetailPage";

const App = () => React.createElement(
    "div",
    null,
    React.createElement(NavBar, null),
    React.createElement(
        Switch,
        null,
        React.createElement(Route, { exact: true, path: "/", component: GridPage }),
        React.createElement(Route, { path: "/movie/:id", component: DetailPage })
    )
);

export default App;
//# sourceMappingURL=App.js.map