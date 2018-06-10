import React from 'react';
import NavBar from "./navbar/NavBar";
import GridPage from "./gridpage/GridPage";
import { Route, Switch } from "react-router-dom";
import DetailPageContainer from "./detailpage/DetailPageContainer";
import Page404Container from "./errorpage/Page404Container";
import AddEditPageContainer from "./addeditpage/AddEditPageContainer";

const App = () => React.createElement(
    "div",
    null,
    React.createElement(NavBar, null),
    React.createElement(
        Switch,
        null,
        React.createElement(Route, { exact: true, path: "/", component: GridPage }),
        React.createElement(Route, { path: "/movie/:id", component: DetailPageContainer }),
        React.createElement(Route, { path: "/add/:id?", component: AddEditPageContainer }),
        React.createElement(Route, { path: "*", component: Page404Container })
    )
);

export default App;
//# sourceMappingURL=App.js.map