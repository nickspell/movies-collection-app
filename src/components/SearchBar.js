// @flow
import React from 'react';
import * as str from '../localization/strings'
import TextField from "@material-ui/core/es/TextField/TextField";
import {Field, reduxForm} from "redux-form";
import '../styles/css/components/searchbar.css'
import orange from "@material-ui/core/es/colors/orange";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {createMuiTheme} from '@material-ui/core/styles';
import grey from "@material-ui/core/es/colors/grey";
import InputAdornment from "@material-ui/core/es/InputAdornment/InputAdornment";
import Button from "@material-ui/core/es/Button/Button";


type Props = {
    activeLanguage: string,
    filterById: boolean,
    classes: any
}


const theme = createMuiTheme({
    palette: {
        primary: {main: orange[800], dark: orange[800]}, //line+label when active
        secondary: {main: grey[50]},
        text: {
            primary: grey[50], //line color when hover
            secondary: orange[800], //label color
        },
    },

    typography: {
        fontSize: 20,
    },
    overrides: {
        MuiInput: {
            root: {
                color: grey[50],
            },
            underline: {
                '&:before': {
                    borderBottomColor: grey[50],
                    borderBottomWidth: 1,
                },
                '&:after': {
                    borderBottomColor: orange[800],
                    borderBottomWidth: 3,
                }
            }
        },
        MuiButton:{
            root:{
                //background: "linear-gradient(90deg, #FE6B8B 30%, #FF8E53 90%)",
                borderRadius:10,
                border: 0,
                minHeight: 0,
                minWidth:0,
                paddingLeft:10,
                paddingRight:10,
                paddingTop:5,
                paddingBottom:5,
                fontSize:'0.7em',
            }

        }
    }
});


let SearchBar = ({activeLanguage, filterById, classes}: Props) => {
    str.strings.setLanguage(activeLanguage);
    let placeholder = filterById ? str.strings.queryPlaceholderID : str.strings.queryPlaceholderTitle;
    return (
        <div className={"formcc"}>
            <form>
                <MuiThemeProvider theme={theme}>
                    <Field name={"query"} component={TextField} label={placeholder} fullWidth={true}
                           InputProps={{
                               endAdornment:
                                   <InputAdornment position="start">
                                       <Button variant="raised"  color={filterById?"primary":"secondary"} style={{'margin-right':5}} >
                                           ID
                                       </Button>
                                       <Button variant="raised"  color={filterById?"secondary":"primary"}>
                                           TITLE
                                       </Button>
                                   </InputAdornment>,
                           }}/>
                </MuiThemeProvider>
            </form>
        </div>
    );
};
//TODO add button actions
SearchBar = reduxForm({
        form: 'searchBar'
    }
)(SearchBar);
export default SearchBar;