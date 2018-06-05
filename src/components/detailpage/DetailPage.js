// @flow
import React from 'react'
import '../../styles/css/components/moviedetails.css'
import * as db from '../../remote'
import Paper from "@material-ui/core/es/Paper/Paper";
import grey from "@material-ui/core/es/colors/grey";
import {withStyles} from '@material-ui/core/styles';
import MediaQuery from 'react-responsive';
import green from "@material-ui/core/es/colors/green";
import yellow from "@material-ui/core/es/colors/yellow";
import deepOrange from "@material-ui/core/es/colors/deepOrange";
import CircularProgressbar from "react-circular-progressbar";
import DetailTitle from "./DetailTitle";
import DetailInfo from "./DetailInfo";
import DetailScores from "./DetailScores";
import DetailOverview from "./DetailOverview";
import DetailPrizes from "./DetailPrizes";
import DetailGenres from "./DetailGenres";
import DetailTrailer from "./DetailTrailer";
import DetailPersonalInfo from "./DetailPersonalInfo";
import * as str from "../../localization/strings";
import {Redirect} from "react-router-dom";


type Classes = {
    root: {[string]:string},
    rootSmall: {[string]:string},
}

type Props = {
    match: {
        params: {
            id: number
        }
    },
    classes: Classes;
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
        backgroundColor: grey[800],
        //width: '100% - 30px',
        marginLeft: 30,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 10
    },
    rootSmall: {
        backgroundColor: grey[800],
        //width: '100% - 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
    },

});

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




const PaperContent = ({movie}: { movie: Movie }) => {
    const lang=str.strings.getLanguage();
    return (<div>
        <DetailTitle title={movie.useTMDB?movie.title[lang]:movie.title['def']} catchy={movie.useTMDB?movie.catchy[lang]:movie.catchy['def']}/>
        <DetailInfo date={movie.date} duration={movie.duration}/>
    </div>)
};

const AdditionalContent = ({movie,color}: { movie: Movie,color:string }) => {
    const lang=str.strings.getLanguage();
    return(
            <div className={'additionalwrapper'}>
                <DetailScores rtscore={movie.rtscore} audscore={movie.audscore} color={color}/>
                <DetailOverview description={movie.useTMDB?movie.description[lang]:movie.description['def']}/>
                <DetailPrizes {...movie}/>
                <DetailGenres genres={movie.useTMDB?movie.genres[lang]:movie.genres['def']}/>
                <DetailTrailer trailer={movie.trailer}/>
                <DetailPersonalInfo resolution={movie.resolution} hd={movie.hd}/>
            </div>
        )
};


const DetailPage = ({match, classes}: Props) => {
    const movie = movies[match.params.id];
    if(!movie){
        return(
            <Redirect to={"/err"}/>
        );
    }
    const lang=str.strings.getLanguage();
    const posterurl=movie.useTMDB?(db.BASE_PATH_TMDB + 'original/' + movie.poster): movie.poster;
    return (
        <div className={'backm'}>
            <div className={'wrapper detail'}>
                <div className={'megaposter'}>
                    <Paper elevation={10}>
                        <img src={posterurl} width={'100%'} height={'100%'}
                             alt={movie.useTMDB?movie.title[lang]:movie.title['def']}/>
                    </Paper>
                </div>
                <div className={'megadetails'}>
                    <MediaQuery query="(max-width: 480px)">
                        <Paper classes={{root: classes.rootSmall}} elevation={10}>
                            <PaperContent movie={movie}/>
                        </Paper>
                    </MediaQuery>
                    <MediaQuery query="(min-width: 481px) and (max-width: 800px)">
                        <Paper classes={{root: classes.root}} elevation={10}>
                            <PaperContent movie={movie}/>
                        </Paper>
                    </MediaQuery>
                    <MediaQuery query="(min-width: 801px)">
                        <Paper classes={{root: classes.root}} elevation={10}>
                            <PaperContent movie={movie}/>
                            <AdditionalContent movie={movie} color={grey[50]}/>
                        </Paper>
                    </MediaQuery>
                </div>
            </div>
            <MediaQuery query="(max-width: 800px)">
                <AdditionalContent movie={movie} color={grey[800]}/>
            </MediaQuery>
        </div>)
};


export default withStyles(styles)(DetailPage);
