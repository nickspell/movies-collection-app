// @flow
import React from 'react';
import {Field, formValueSelector, reduxForm} from "redux-form";
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
import ChipInput from 'material-ui-chip-input'
import Button from "@material-ui/core/es/Button/Button";
import {Redirect} from "react-router-dom";
import IntegrationAutosuggestContainer from "./IntegrationAutosuggestContainer";
import {connect} from "react-redux";
import * as db from "../../remote";
import YouTube from 'react-youtube'
import ConfirmDialog from "./ConfirmDialog";



const styles = () => ({
    root: {
        //backgroundColor: grey[800],
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        marginBottom:20
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
        },
        MuiDialogContentText:{
            root: {
                color: grey[800]
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

const renderTextField = ({ input,errText, label, meta: { touched, error }, ...custom }) => (
    <TextField label={label}
               error={touched && error}
               // FormHelperTextProps={{
               //     error:true
               // }}
               helperText={touched && error?errText:''}
               {...input}
               {...custom}
               onKeyPress={e => {
                   if (e.key === 'Enter') e.preventDefault();
               }}
    />
);

// const renderChips=({ input, label, meta: { touched, error }, ...custom }) => (
//     <ChipInput label={label}
//                error={touched && error}
//                {...input}
//                {...custom}
//                onKeyPress={e => {
//                    if (e.key === 'Enter') e.preventDefault();
//                }}
//     />
// );

const renderChips = ({input, hintText, floatingLabelText,disabled}) => (
    <ChipInput
        {...input}
        value = { input.value || []}
        onAdd={(addedChip) => {
            let values = input.value || [];
            values = values.slice();
            values.push(addedChip);
            input.onChange(values);
        }}
        onDelete={(deletedChip) => {
            let values = input.value || [];
            values = values.filter(v => v !== deletedChip);
            input.onChange(values);
        }}
        onBlur={() => input.onBlur()}
        helperText={hintText}
        label={floatingLabelText}
        onKeyPress={e => {
            if (e.key === 'Enter') e.preventDefault();
        }}
        disabled={disabled}
    />
);

const validate = values => {
    const errors = {};
    const requiredFields = [
        'title',
        'posterURL',
        'year',
        'runtime',
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = true
        }
    });
    return errors;
};





class AddEditPage extends React.Component<Props>{

    state={
        addChoice:false,
        useTMDB:false,
        previewPoster:false,
    };

    componentDidMount() {
        if (this.props.match.params.id)
            this.props.fetchMovieDetails(this.props.match.params.id);
        else
            this.props.fetchMovies();

    };

    setTMDB=(bin)=>{
        this.setState({addChoice:true,useTMDB:bin})
    };

    onSubmit=(values)=>{
        if(this.props.match.params.id){
            //edit
            let newMovie=this.props.movie;
            newMovie.rtscore=values.rt?values.rt:0;
            newMovie.audscore=values.aud?values.aud:0;
            newMovie.nnoscars=values.nnoscars?values.nnoscars:0;
            newMovie.nwoscars=values.nwoscars?values.nwoscars:0;
            newMovie.nnglobes=values.nnglobes?values.nnglobes:0;
            newMovie.nwglobes=values.nwglobes?values.nwglobes:0;
            if(values.resolution)
                newMovie.resolution=values.resolution;
            if(values.hd)
                newMovie.hd=values.hd;
            if(!this.props.movie.useTMDB){
                //edit other fields
                newMovie.title['def']=values.title;
                newMovie.catchy['def']=values.tagline?values.tagline:'';
                newMovie.poster['def']=values.posterURL;
                newMovie.date=values.year;
                newMovie.duration=values.runtime;
                newMovie.genres['def']=values.chips?values.chips:[];
                if(values.trailerURL)
                    newMovie.trailer={def:values.trailerURL};
                newMovie.description['def']=values.overview?values.overview:'';
                newMovie.tmdbID='none';
                newMovie.imdbID='none';
            }
            this.props.editMovie(newMovie.id,newMovie);
        }else{
            //add
            let newMovie={};

            if(this.props.movie)
                newMovie=this.props.movie;

            newMovie.rtscore=values.rt?values.rt:0;
            newMovie.audscore=values.aud?values.aud:0;
            newMovie.nnoscars=values.nnoscars?values.nnoscars:0;
            newMovie.nwoscars=values.nwoscars?values.nwoscars:0;
            newMovie.nnglobes=values.nnglobes?values.nnglobes:0;
            newMovie.nwglobes=values.nwglobes?values.nwglobes:0;
            if(values.resolution)
                newMovie.resolution=values.resolution;
            if(values.hd)
                newMovie.hd=values.hd;
            if(!this.props.movie){
                newMovie.title={def:values.title};
                newMovie.catchy={def:values.tagline?values.tagline:''};
                newMovie.poster={def:values.posterURL};
                newMovie.date=values.year;
                newMovie.duration=values.runtime;
                newMovie.genres={def:values.chips?values.chips:[]};
                if(values.trailerURL)
                    newMovie.trailer={def:values.trailerURL};
                newMovie.description={def:values.overview?values.overview:''};
                newMovie.useTMDB=false;
                newMovie.tmdbID='none';
                newMovie.imdbID='none';
            }

            //need to compute new id
            const sortedids=this.props.ids.sort((a,b)=>parseInt(a,10)>parseInt(b,10));
            let idtoput=-1;
            let x;
            for(x=0;x<sortedids.length;x++){
                if(sortedids[x]!==(x+1)){
                    idtoput=x+1;
                    break;
                }
            }
            if(idtoput===-1)
                idtoput=sortedids.length+1;
            
            newMovie.mvid=idtoput;
            //send add request
            this.props.addMovie(newMovie);
        }
    };

    showPoster=()=>{
        this.setState({previewPoster:true})
    };
    
    render(){
        const {match,classes, posterURL,trailerURL, handleSubmit, pristine, submitting,strings,isFetching,errorMessage,movie} = this.props;

        if(!match.params.id && !this.state.addChoice){
            return(
                <div className={'backm'}>
                    <div className={'formwrapper'}>
                        <Paper classes={{root: classes.root}} elevation={10}>
                            <MuiThemeProvider theme={theme}>
                                <div style={{marginBottom: 10}}><span
                                    className={'titleform'}>{strings.add}</span></div>
                                <div  style={{marginBottom: 20}}>
                                    <IntegrationAutosuggestContainer onSelect={()=>{this.setTMDB(true)}} label={strings.usetmdb}/>
                                </div>
                                <div style={{marginBottom: 20,width:'100%',textAlign: 'center'}}>
                                    {strings.or}
                                </div>
                                <Button
                                    color={"primary"}
                                    onClick={()=>{this.setTMDB(false)}}
                                >{strings.manual}</Button>
                            </MuiThemeProvider>
                        </Paper>
                    </div>
                </div>
            )
        }


        if (match.params.id) {
            if(isFetching && !movie){
                return <p>Loading</p>;
            }
            if(errorMessage && !movie){
                console.error(errorMessage);
                return(
                    <Redirect to={"/err"}/>
                );
            }
            if(!movie){
                return <div/>
            }

        }

        return (
            <div className={'backm'}>
                <div className={'formwrapper'}>
                    <Paper classes={{root: classes.root}} elevation={10}>
                        <div style={{marginBottom: 10}}><span
                            className={'titleform'}>{(movie && movie.mvid)? strings.edit : strings.add}</span></div>
                        <form className={'form'}
                              onSubmit={handleSubmit((values)=>{
                                  this.onSubmit(values);
                              })}>
                            <MuiThemeProvider theme={theme}>
                                <ConfirmDialog open={this.props.done} text={
                                    this.props.errorMessage?strings.error:
                                        strings.success
                                } onClick={this.props.resetDone}/>
                                <Field name={"title"}
                                       component={renderTextField}
                                       label={strings.titleButton}
                                       //helperText={str.strings.tmdbSuggestion}
                                       fullWidth={true}
                                       disabled={movie && movie.useTMDB}
                                       style={{marginBottom: 10}}
                                       {...{
                                           errText: strings.required
                                       }}
                                        />
                                {/*<Field name={"tmdbid"}*/}
                                       {/*component={renderTextField}*/}
                                       {/*label="TMDB id (to hide)"*/}
                                       {/*style={{marginBottom: 10}}*/}
                                {/*/>*/}
                                <Field name='tagline'
                                       component={renderTextField}
                                       label="Tag-line"
                                       fullWidth={true}
                                       disabled={movie && movie.useTMDB}
                                       style={{marginBottom: 10}}/>
                                <Field name={"posterURL"}
                                       component={renderTextField}
                                       label="Poster URL"
                                       fullWidth={true}
                                       disabled={movie && movie.useTMDB}
                                       style={{marginBottom: 10}}
                                       {...{
                                           errText: strings.required
                                       }}
                                       />
                                {posterURL?((this.state.previewPoster || (movie && movie.useTMDB))?
                                <div style={{marginBottom: 10}}>
                                    <img src={
                                        (movie && movie.useTMDB)?(db.BASE_PATH_TMDB + 'w500/' + posterURL):
                                            posterURL
                                    } height={300} width={200} alt={strings.invalid}/>
                                </div>:
                                <Button
                                    color={'primary'}
                                    onClick={this.showPoster}
                                >{strings.preview}</Button>
                                ):''}
                                <div className={'inline'}>
                                    <div className={'year'}>
                                        <Field name='year'
                                               component={renderTextField}
                                               type="number"
                                               label={strings.orderDate}
                                               style={{marginBottom: 10}}
                                               disabled={movie && movie.useTMDB}
                                               {...{
                                                   errText: strings.required
                                               }}
                                        />
                                    </div>
                                    <div className={'year'}>
                                        <Field name={"runtime"}
                                               component={renderTextField}
                                               type="number"
                                               label={strings.duration}
                                               style={{marginBottom: 10}}
                                               disabled={movie && movie.useTMDB}
                                               {...{
                                                   errText: strings.required
                                               }}
                                        /></div>
                                </div>
                                <div className={'inline'}>
                                    <div className={'year'}>
                                        <Field name={"rt"}
                                               component={renderTextField}
                                               type="number"
                                               label='Rotten Tomatoes'
                                               style={{marginBottom: 30}}

                                        />
                                    </div>
                                    <div className={'year'}>
                                        <Field name={"aud"}
                                               component={renderTextField}
                                               type="number"
                                               label='Audience Score'
                                               style={{marginBottom: 30}}
                                        /></div>
                                </div>
                                <Field name={"overview"}
                                       component={renderTextField}
                                       label={strings.description}
                                       multiline={true}
                                       fullWidth={true}
                                       disabled={movie && movie.useTMDB}
                                       style={{marginBottom: 10}}
                                       {...{
                                           errText: strings.required
                                       }}
                                       />
                                <div className={'inline2'}>
                                    <span style={{color: orange[800]}}>Oscars:</span>
                                    <div className={'prizesx'}>
                                        <Field name={"nwoscars"}
                                               component={renderTextField}
                                               type="number"
                                               label='Wins'
                                               style={{marginBottom: 30}}
                                               InputLabelProps={{
                                                   shrink: true,
                                               }}
                                        /></div>
                                    <div className={'prizesn'}>
                                        <Field name={"nnoscars"}
                                               component={renderTextField}
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
                                               component={renderTextField}
                                               type="number"
                                               label='Wins'
                                               style={{marginBottom: 15}}
                                               InputLabelProps={{
                                                   shrink: true,
                                               }}
                                        /></div>
                                    <div className={'prizesn'}>
                                        <Field name={"nnglobes"}
                                               component={renderTextField}
                                               type="number"
                                               label='Nominations'
                                               style={{marginBottom: 15}}
                                               InputLabelProps={{
                                                   shrink: true,
                                               }}
                                        /></div>
                                </div>
                                <div className={'inline2'} style={{marginBottom: 10}}>
                                    <span style={{color: orange[800],marginRight:20}}>{strings.genres}:</span>
                                    <Field name={"chips"}
                                           component={renderChips}
                                           disabled={movie && movie.useTMDB}/>
                                </div>
                                <Field name={"trailer"}
                                       component={renderTextField}
                                       label={"Youtube trailer ID"}
                                       fullWidth={true}
                                       disabled={movie && movie.useTMDB}
                                       style={{marginBottom: 10}}
                                       {...{
                                           errText: strings.required
                                       }}
                                       />
                                {trailerURL?<div style={{marginBottom: 10}}>
                                    <YouTube
                                        videoId={trailerURL}
                                        opts={{
                                            height:'200',
                                            width:'350'
                                        }}
                                    />
                                </div>:''}
                                <Field name={"resolution"}
                                       component={renderTextField}
                                       label={strings.resolution}
                                       fullWidth={true}
                                       style={{marginBottom: 10}}
                                       {...{
                                           errText: strings.required
                                       }}
                                       />
                                <Field name={"hd"}
                                       component={renderTextField}
                                       label={strings.label}
                                       fullWidth={true}
                                       style={{marginBottom: 30}}/>
                                <Button
                                    variant={"raised"}
                                    color={"primary"}
                                    type={'submit'}
                                    disabled={submitting}
                                >{strings.submit}</Button>
                            </MuiThemeProvider>
                        </form>
                    </Paper>
                </div>
            </div>
        )
    }

}



AddEditPage = reduxForm({
        form: 'addetitPage',
        validate
    }
)(AddEditPage);

// Decorate with connect to read form values
const selector = formValueSelector('addetitPage');// <-- same as form name
AddEditPage = connect(state => {
    // can select values individually
    const posterURL = selector(state, 'posterURL');
    const trailerURL = selector(state, 'trailer');
    return {
        posterURL,
        trailerURL,
    }
})(AddEditPage);


export default withStyles(styles)(AddEditPage);