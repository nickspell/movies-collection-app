import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Button from "@material-ui/core/es/Button/Button";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {createMuiTheme} from '@material-ui/core/styles';
import * as pal from '../styles/palette'


const theme=createMuiTheme({
    palette:pal.palette
});

const AddButton =()=>{
    return(
        <MuiThemeProvider theme={theme}>
            <Button variant="fab"  color="primary" aria-label="add">
                <AddIcon />
            </Button>
        </MuiThemeProvider>
    );
};

export default AddButton;