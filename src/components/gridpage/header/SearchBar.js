// @flow
import React from 'react';
import TextField from "@material-ui/core/es/TextField/TextField";
import {Field, reduxForm} from "redux-form";
import '../../../styles/css/components/searchbar.css'
import orange from "@material-ui/core/es/colors/orange";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {createMuiTheme} from '@material-ui/core/styles';
import grey from "@material-ui/core/es/colors/grey";
import InputAdornment from "@material-ui/core/es/InputAdornment/InputAdornment";
import Button from "@material-ui/core/es/Button/Button";
import * as pal from '../../../styles/palette'



const theme = createMuiTheme({
    palette:{
        ...pal.palette,
        secondary :{main:grey[300]}
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
                fontSize:'0.9rem',
                //textTransform:'none'
            }

        }
    }
});

type Props={
    filterById:boolean,
    strings:{[string]:string},
    onFilterTypeChange:Function
}


const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField label={label}
               error={touched && error}
               {...input}
               {...custom}
    />
);

let SearchBar = ({filterType,strings,onFilterTypeChange}:Props) => {
    let placeholder = filterType==='mvid'? strings.queryPlaceholderID : strings.queryPlaceholderTitle;
    return (
        <div className={"formcc"}>
            <form>
                <MuiThemeProvider theme={theme}>
                    <Field name={"query"} component={renderTextField} label={placeholder} fullWidth={true}
                           InputProps={{
                               endAdornment:
                                   <InputAdornment position="end">
                                       <Button variant="raised"  onClick={()=>onFilterTypeChange('mvid')} color={filterType==='mvid'?"primary":"secondary"} style={{'marginRight':5}} >
                                           ID
                                       </Button>
                                       <Button variant="raised"  onClick={()=>onFilterTypeChange('title')} color={filterType==='title'?"primary":"secondary"}>
                                           {strings.titleButton}
                                       </Button>
                                   </InputAdornment>,
                           }}
                        />
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