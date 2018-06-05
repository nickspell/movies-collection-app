// @flow
import React from 'react'
import * as str from "../../localization/strings";
import Chip from "@material-ui/core/es/Chip/Chip";
import {createMuiTheme} from "@material-ui/core/styles/index";
import * as pal from "../../styles/palette";
import grey from "@material-ui/core/es/colors/grey";
import orange from "@material-ui/core/es/colors/orange";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";

const theme = createMuiTheme({
    overrides: {
        MuiChip:{
            root:{
                marginRight:5,
                marginBottom:5,
                backgroundColor:grey[400]
            }

        }
    }
});

const DetailGenres=({genres}:{genres:[string]})=>{
    return(
        <div>
            <div style={{marginTop:10}}>
                <span className={'titolino'}>{str.strings.genres}</span>
            </div>
            <div className={'genres'}>
                {genres.map((genre)=>
                    <MuiThemeProvider theme={theme}>
                     <Chip label={genre}/>
                    </MuiThemeProvider>
                )}
            </div>
        </div>
    );
};

export default DetailGenres;