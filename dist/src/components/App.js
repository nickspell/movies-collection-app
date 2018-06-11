import React from 'react';
import NavBar from "./navbar/NavBar";
import GridPage from "./gridpage/GridPage";
import { Route, Switch } from "react-router-dom";
import DetailPageContainer from "./detailpage/DetailPageContainer";
import Page404Container from "./errorpage/Page404Container";
import AddEditPageContainer from "./addeditpage/AddEditPageContainer";
import Footer from "./Footer";

const App = () => React.createElement(
    "div",
    { className: 'mainContainer' },
    React.createElement(NavBar, null),
    React.createElement(
        "div",
        { style: { flex: 1 } },
        React.createElement(
            Switch,
            null,
            React.createElement(Route, { exact: true, path: "/", component: GridPage }),
            React.createElement(Route, { path: "/movie/:id", component: DetailPageContainer }),
            React.createElement(Route, { path: "/add/:id?", component: AddEditPageContainer }),
            React.createElement(Route, { path: "*", component: Page404Container })
        )
    ),
    React.createElement(Footer, null)
);

export default App;
//# sourceMappingURL=App.js.map