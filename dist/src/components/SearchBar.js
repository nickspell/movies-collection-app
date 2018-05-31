import React from 'react';
import * as str from '../localization/strings';
import TextField from "@material-ui/core/es/TextField/TextField";
import { Field, reduxForm } from "redux-form";
import '../styles/css/components/searchbar.css';
import orange from "@material-ui/core/es/colors/orange";
import withStyles from "@material-ui/core/es/styles/withStyles";
import grey from "@material-ui/core/es/colors/grey";

const styles = () => ({
    cssLabel: {
        '&$cssFocused': {
            color: grey[50]
        }
    },
    cssFocused: {},
    cssUnderline: {
        '&:before': {
            borderBottomColor: grey[50],
            borderBottomWidth: 1
        },
        '&:after': {
            borderBottomColor: orange[500],
            borderBottomWidth: 3
        }
    },
    cssLabelProps: {
        color: grey[400],
        fontSize: 20
    }
});

let SearchBar = ({ activeLanguage, filterById, classes }) => {
    str.strings.setLanguage(activeLanguage);
    let placeholder = filterById ? str.strings.queryPlaceholderID : str.strings.queryPlaceholderTitle;
    return React.createElement(
        'div',
        { className: "formcc" },
        React.createElement(
            'form',
            null,
            React.createElement(Field, { name: "query", component: TextField, label: placeholder, fullWidth: true,
                InputProps: {
                    classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                        underline: classes.cssUnderline
                    }
                },
                InputLabelProps: {
                    className: classes.cssLabelProps
                } })
        )
    );
};

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);
export default withStyles(styles)(SearchBar);
//# sourceMappingURL=SearchBar.js.map