var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
import * as pal from '../styles/palette';

const breakpoint = {
    xs: 400
};

const theme = createMuiTheme({
    palette: _extends({}, pal.palette, {
        secondary: { main: grey[300] }
    }),
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
                fontSize: '0.9rem'
                //textTransform:'none'
            }

        }
    }
});

let SearchBar = ({ filterById }) => {

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
                    }
                })
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