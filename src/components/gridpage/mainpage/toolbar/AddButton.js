// @flow

import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Button from "@material-ui/core/es/Button/Button";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {createMuiTheme} from '@material-ui/core/styles';
import * as pal from '../../../../styles/palette'
import {Link} from "react-router-dom";


const theme=createMuiTheme({
    palette:pal.palette
});

const AddButton =()=>{
    return(
        <MuiThemeProvider theme={theme}>
            <Link to={"/add/"} style={{ textDecoration: 'none' }}>
                <Button variant="fab"  color="primary" aria-label="add">
                        <AddIcon />
                </Button>
            </Link>
        </MuiThemeProvider>
    );
};

export default AddButton;