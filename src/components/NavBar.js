// @flow

import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LanguageMenu from "./LanguageMenu";


const NavBar = () =>
    <AppBar position={"static"}>
        <Toolbar>
            <LanguageMenu activeLanguage={"it"}/>
        </Toolbar>
    </AppBar>;


export default NavBar;