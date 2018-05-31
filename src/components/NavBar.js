// @flow

import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LanguageMenu from "./LanguageMenu";

import '../styles/css/components/navbar.css'
import withStyles from "@material-ui/core/es/styles/withStyles";
import orange from "@material-ui/core/es/colors/orange";

const styles={
    root:{
        height:50,
        backgroundColor:orange[800]
    },
};

const NavBar = ({classes}) =>
    <AppBar position={"static"} elevation={0}>
        <Toolbar style={{minHeight:0}} className={classes.root}>
            <div className={"placeholder"}/>
            <LanguageMenu activeLanguage={"it"} />
        </Toolbar>
    </AppBar>;


export default withStyles(styles)(NavBar);