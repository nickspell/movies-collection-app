// @flow
import React from 'react'
import Chip from "@material-ui/core/es/Chip/Chip";
import {createMuiTheme} from "@material-ui/core/styles/index";
import grey from "@material-ui/core/es/colors/grey";
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

const DetailGenres=({genres,genresT}:{genres:[string],genresT:string})=>{
    return(
        <div>
            <div style={{marginTop:10}}>
                <span className={'titolino'}>{genresT}</span>
            </div>
            <div className={'genres'}>
                <MuiThemeProvider  theme={theme}>
                {genres.map((genre)=>
                     <Chip key={genre} label={genre.toUpperCase()}/>
                )}
                </MuiThemeProvider>
            </div>
        </div>
    );
};

export default DetailGenres;