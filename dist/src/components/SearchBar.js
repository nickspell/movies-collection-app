import React from 'react';
import * as str from '../localization/strings';
import TextField from "@material-ui/core/es/TextField/TextField";
import { Field, reduxForm } from "redux-form";
import '../styles/css/components/searchbar.css';
import orange from "@material-ui/core/es/colors/orange";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import grey from "@material-ui/core/es/colors/grey";
import InputAdornment from "@material-ui/core/es/InputAdornment/InputAdornment";
import Button from "@material-ui/core/es/Button/Button";

const theme = createMuiTheme({
    palette: {
        primary: { main: orange[800], dark: orange[800] }, //line+label when active
        secondary: { main: grey[50] },
        text: {
            primary: grey[50], //line color when hover
            secondary: orange[800] //label color
        }
    },

    typography: {
        fontSize: 20
    },
    overrides: {
        MuiInput: {
            root: {
                color: grey[50]
            },
            underline: {
                '&:before': {
                    borderBottomColor: grey[50],
                    borderBottomWidth: 1
                },
                '&:after': {
                    borderBottomColor: orange[800],
                    borderBottomWidth: 3
                }
            }
        },
        MuiButton: {
            root: {
                //background: "linear-gradient(90deg, #FE6B8B 30%, #FF8E53 90%)",
                borderRadius: 10,
                border: 0,
                minHeight: 0,
                minWidth: 0,
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 5,
                paddingBottom: 5,
                marginBottom: 3,
                fontSize: '1.1rem'
                //textTransform:'none'
            }

        }
    }
});

let SearchBar = ({ activeLanguage, filterById }) => {
    str.strings.setLanguage(activeLanguage);
    let placeholder = filterById ? str.strings.queryPlaceholderID : str.strings.queryPlaceholderTitle;
    return React.createElement(
        'div',
        { className: "formcc" },
        React.createElement(
            'form',
            null,
            React.createElement(
                MuiThemeProvider,
                { theme: theme },
                React.createElement(Field, { name: "query", component: TextField, label: placeholder, fullWidth: true,
                    InputProps: {
                        endAdornment: React.createElement(
                            InputAdornment,
                            { position: 'end' },
                            React.createElement(
                                Button,
                                { variant: 'raised', color: filterById ? "primary" : "secondary", style: { 'marginRight': 5 } },
                                'ID'
                            ),
                            React.createElement(
                                Button,
                                { variant: 'raised', color: filterById ? "secondary" : "primary" },
                                str.strings.titleButton
                            )
                        )
                    } })
            )
        )
    );
};
//TODO add button actions
SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);
export default SearchBar;
//# sourceMappingURL=SearchBar.js.map