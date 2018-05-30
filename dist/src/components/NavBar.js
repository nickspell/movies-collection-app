import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LanguageMenu from "./LanguageMenu";

const NavBar = () => React.createElement(
    AppBar,
    { position: "static" },
    React.createElement(
        Toolbar,
        null,
        React.createElement(LanguageMenu, { activeLanguage: "it" })
    )
);

export default NavBar;
//# sourceMappingURL=NavBar.js.map