// @flow

import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import '../../styles/css/components/navbar.css'
import '../../styles/css/main.css'
import withStyles from "@material-ui/core/es/styles/withStyles";
import orange from "@material-ui/core/es/colors/orange";
import LanguageMenuContainer from "./LanguageMenuContainer";



const styles={
    root:{
        height:50,
        backgroundColor:orange[800]
    },
};

const NavBar = ({classes}) =>
    <AppBar elevation={0}>
        <Toolbar style={{minHeight:0}} className={classes.root}>
            <div className={"placeholder"}/>
            <LanguageMenuContainer/>
        </Toolbar>
    </AppBar>;


export default withStyles(styles)(NavBar);