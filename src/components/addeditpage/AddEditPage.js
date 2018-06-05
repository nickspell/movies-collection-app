import React from 'react';
import {Field, reduxForm} from "redux-form";
import * as str from "../../localization/strings";
import '../../styles/css/components/editpage.css'
import Paper from "@material-ui/core/es/Paper/Paper";
import grey from "@material-ui/core/es/colors/grey";
import {withStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/es/TextField/TextField";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import * as pal from "../../styles/palette";
import orange from "@material-ui/core/es/colors/orange";
import {createMuiTheme} from "@material-ui/core/styles/index";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Input from "@material-ui/core/es/Input/Input";

type Movie = {
    id: number, //
    title: {[string]:string},
    poster: string,
    rtscore: number,//
    audscore: number,//
    nnoscars: number,//
    nwoscars: number,//
    nnglobes: number,//
    nwglobes: number,//
    date: number,//
    duration: number,//
    resolution: string,
    hd: string,
    trailer: string,
    catchy:{[string]:string},
    description:{[string]:string},
    genres:{[string]:[string]},
    useTMDB:boolean
};

type Props = {
    match: {
        params: {
            id?: number
        }
    },
    classes:{
        root:{[string]:string}
    }
}

const movies = {
    '200': {
        id: 200, //
        title: {'def':'Il centenario che saltò dalla finestra e scomparve'},
        //title:'Deadpool 2',
        poster: 'https://image.tmdb.org/t/p/original/flp7yFZIbl8806xpHItnIDkNy7N.jpg',
        rtscore: 90,//
        audscore: 78,//
        nnoscars: 1,//
        nwoscars: 1,//
        nnglobes: 2,//
        nwglobes: 1,//
        date: 2018,
        duration: 115,//
        resolution: '4K',
        hd: '5',
        trailer: '-ppVHWO5gu8',
        catchy:{'def':'Prepare for the Second Coming.'},
        //catchy:'Mankind was born on Earth. It was never meant to die here.',
        //description:'Una covata di pesci pagliaccio viene distrutta dall\'attacco di un feroce barracuda. Sopravvivono solamente il papà, Marlin, e un unico piccolo che viene chiamato Nemo. Il pesciolino ha una pinna atrofizzata e il padre è iperapprensivo nei suoi confronti al punto di desiderare che l\'inizio della scuola venga ritardato. Un giorno però Nemo viene catturato da un dentista appassionato di pesca subacquea e l\'acquario sarà la sua prigione. Marlin deve quindi vincere tutti i suoi timori per ritrovarlo. Verrà aiutato da Dory, una pesciolina simpaticamente smemorata.',
        description:{'def':'Deadpool sta venendo di nuovo e stavolta non è da solo: in questo secondo capitolo, il supereroe più dissacrante della Marvel crea un nuovo team, l\'X-Force, con l\'obiettivo di proteggere un ragazzino da Cable, mutante venuto dal futuro per ucciderlo.'},
        genres:{'def':['AZIONE','COMMEDIA','FANTASCIENZA','HORROR','SGOMENTO','PAURA','SENTIMENTO']},
        useTMDB:false
    }
};

const styles = () => ({
    root: {
        //backgroundColor: grey[800],
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 10
    },

});

const theme = createMuiTheme({
    palette:{
        ...pal.palette,
        text:{
            primary:grey[800]
        }
    },
    typography: {
        fontSize: '1em',
    },
    overrides: {
        MuiInput: {
            root: {
                color: grey[800],
            },
            underline: {
                '&:after': {
                    borderBottomColor: orange[800],
                }
            }
        },
        MuiButton:{
            root:{

            }

        }
    }
});



let AddEditPage=({match,classes}:Props)=>{
    let movie=null;
    if(match.params.id){
        movie=movies[match.params.id]
    }
    return(
        <div className={'backm'}>
            <div className={'formwrapper'}>
                <Paper  classes={{root: classes.root}} elevation={10}>
                    <div><span className={'titleform'}>{movie?str.strings.edit:str.strings.add}</span></div>
                    <form>
                        <MuiThemeProvider theme={theme}>
                            <FormControl >
                                <InputLabel htmlFor="name-title">{str.strings.titleButton}</InputLabel>
                                <Field name={"query"} component={Input} fullWidth={true}/>
                            </FormControl>
                        </MuiThemeProvider>
                    </form>
                </Paper>
            </div>
        </div>
    )

};


AddEditPage = reduxForm({
        form: 'addetitPage'
    }
)(AddEditPage);
export default withStyles(styles)(AddEditPage);
