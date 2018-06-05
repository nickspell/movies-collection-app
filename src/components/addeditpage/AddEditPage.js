// @flow
import React from 'react';
import {Field, reduxForm} from "redux-form";
import * as str from "../../localization/strings";
import type {FormProps} from 'redux-form';
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
import FormHelperText from "@material-ui/core/es/FormHelperText/FormHelperText";
import ChipInput from 'material-ui-chip-input'
import Button from "@material-ui/core/es/Button/Button";
import * as ReactDOM from "react-dom";


type Movie = {
    id: number, //
    title: { [string]: string },
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
    catchy: { [string]: string },
    description: { [string]: string },
    genres: { [string]: [string] },
    useTMDB: boolean
};


const movies = {
    '200': {
        id: 200, //
        title: {'def': 'Il centenario che saltò dalla finestra e scomparve'},
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
        catchy: {'def': 'Prepare for the Second Coming.'},
        //catchy:'Mankind was born on Earth. It was never meant to die here.',
        //description:'Una covata di pesci pagliaccio viene distrutta dall\'attacco di un feroce barracuda. Sopravvivono solamente il papà, Marlin, e un unico piccolo che viene chiamato Nemo. Il pesciolino ha una pinna atrofizzata e il padre è iperapprensivo nei suoi confronti al punto di desiderare che l\'inizio della scuola venga ritardato. Un giorno però Nemo viene catturato da un dentista appassionato di pesca subacquea e l\'acquario sarà la sua prigione. Marlin deve quindi vincere tutti i suoi timori per ritrovarlo. Verrà aiutato da Dory, una pesciolina simpaticamente smemorata.',
        description: {'def': 'Deadpool sta venendo di nuovo e stavolta non è da solo: in questo secondo capitolo, il supereroe più dissacrante della Marvel crea un nuovo team, l\'X-Force, con l\'obiettivo di proteggere un ragazzino da Cable, mutante venuto dal futuro per ucciderlo.'},
        genres: {'def': ['AZIONE', 'COMMEDIA', 'FANTASCIENZA', 'HORROR', 'SGOMENTO', 'PAURA', 'SENTIMENTO']},
        useTMDB: false
    }
};

const styles = () => ({
    root: {
        //backgroundColor: grey[800],
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
    },

});

const theme = createMuiTheme({
    palette: {
        ...pal.palette,
        text: {
            primary: grey[800],
            secondary: orange[800],

        }
    },
    typography: {
        //fontSize: '1em',
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
        MuiButton: {
            root: {}

        },
        MuiFormHelperText: {
            root: {
                color: grey[600]
            }
        }
    }
});
type Props = {
    match: {
        params: {
            id?: number
        }
    },
    classes: {
        root: { [string]: string }
    }
} & FormProps;

class AddEditPage extends React.Component<Props>{
    render(){
        const {match, classes, handleSubmit, pristine, reset, submitting} = this.props;
        let movie = null;
        if (match.params.id) {
            movie = movies[match.params.id]
        }
        return (
            <div className={'backm'}>
                <div className={'formwrapper'}>
                    <Paper classes={{root: classes.root}} elevation={10}>
                        <div style={{marginBottom: 10}}><span
                            className={'titleform'}>{movie ? str.strings.edit : str.strings.add}</span></div>
                        <form className={'form'}>
                            <MuiThemeProvider theme={theme}>
                                <Field name={"title"}
                                       component={TextField}
                                       label={str.strings.titleButton}
                                       helperText={str.strings.tmdbSuggestion}
                                       fullWidth={true}
                                       style={{marginBottom: 10}}/>
                                <Field name={"tmdbid"}
                                       component={TextField}
                                       label="TMDB id (to hide)"
                                       style={{marginBottom: 10}}
                                />
                                <Field name={"tagline"}
                                       component={TextField}
                                       label="Tagline"
                                       fullWidth={true}
                                       style={{marginBottom: 10}}/>
                                <Field name={"posterURL"}
                                       component={TextField}
                                       label="Poster URL"
                                       fullWidth={true}
                                       style={{marginBottom: 10}}/>
                                <div className={'inline'}>
                                    <div className={'year'}>
                                        <Field name={"year"}
                                               component={TextField}
                                               type="number"
                                               label={str.strings.orderDate}
                                               style={{marginBottom: 10}}

                                        />
                                    </div>
                                    <div className={'year'}>
                                        <Field name={"runtime"}
                                               component={TextField}
                                               type="number"
                                               label={str.strings.duration}
                                               style={{marginBottom: 10}}
                                        /></div>
                                </div>
                                <div className={'inline'}>
                                    <div className={'year'}>
                                        <Field name={"rt"}
                                               component={TextField}
                                               type="number"
                                               label='Rotten Tomatoes'
                                               style={{marginBottom: 30}}

                                        />
                                    </div>
                                    <div className={'year'}>
                                        <Field name={"aud"}
                                               component={TextField}
                                               type="number"
                                               label='Audience Score'
                                               style={{marginBottom: 30}}
                                        /></div>
                                </div>
                                <div className={'inline2'}>
                                    <span style={{color: orange[800]}}>Oscars:</span>
                                    <div className={'prizesx'}>
                                        <Field name={"nwoscars"}
                                               component={TextField}
                                               type="number"
                                               label='Wins'
                                               style={{marginBottom: 30}}
                                               InputLabelProps={{
                                                   shrink: true,
                                               }}
                                        /></div>
                                    <div className={'prizesn'}>
                                        <Field name={"nnoscars"}
                                               component={TextField}
                                               type="number"
                                               label='Nominations'
                                               style={{marginBottom: 30}}
                                               InputLabelProps={{
                                                   shrink: true,
                                               }}
                                        /></div>
                                </div>
                                <div className={'inline2'}>
                                    <span style={{color: orange[800]}}>Golden Globes:</span>
                                    <div className={'prizesx'}>
                                        <Field name={"nwglobes"}
                                               component={TextField}
                                               type="number"
                                               label='Wins'
                                               style={{marginBottom: 15}}
                                               InputLabelProps={{
                                                   shrink: true,
                                               }}
                                        /></div>
                                    <div className={'prizesn'}>
                                        <Field name={"nnglobes"}
                                               component={TextField}
                                               type="number"
                                               label='Nominations'
                                               style={{marginBottom: 15}}
                                               InputLabelProps={{
                                                   shrink: true,
                                               }}
                                        /></div>
                                </div>
                                <div className={'inline2'}>
                                    <span style={{color: orange[800],marginRight:20}}>{str.strings.genres}:</span>
                                    <Field name={"chips"}
                                           component={ChipInput}
                                           style={{marginBottom: 10}}/>
                                </div>
                                <Field name={"resolution"}
                                       component={TextField}
                                       label={str.strings.resolution}
                                       fullWidth={true}
                                       style={{marginBottom: 10}}/>
                                <Field name={"hd"}
                                       component={TextField}
                                       label={str.strings.label}
                                       fullWidth={true}
                                       style={{marginBottom: 30}}/>
                                <Button
                                    variant={"raised"}
                                    color={"primary"}
                                    type={'submit'}
                                >{str.strings.submit}</Button>
                            </MuiThemeProvider>
                        </form>
                    </Paper>
                </div>
            </div>
        )
    }

}






AddEditPage = reduxForm({
        form: 'addetitPage'
    }
)(AddEditPage);
export default withStyles(styles)(AddEditPage);