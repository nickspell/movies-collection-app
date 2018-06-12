// @flow
import React from 'react'
import '../../styles/css/components/moviedetails.css'
import * as db from '../../remote'
import Paper from "@material-ui/core/es/Paper/Paper";
import grey from "@material-ui/core/es/colors/grey";
import {withStyles} from '@material-ui/core/styles';
import MediaQuery from 'react-responsive';
import DetailTitle from "./DetailTitle";
import DetailInfo from "./DetailInfo";
import DetailScores from "./DetailScores";
import DetailOverview from "./DetailOverview";
import DetailPrizes from "./DetailPrizes";
import DetailGenres from "./DetailGenres";
import DetailTrailer from "./DetailTrailer";
import DetailPersonalInfo from "./DetailPersonalInfo";
import {Redirect} from "react-router-dom";


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
    poster: {[string]:string},
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
    trailer: {[string]:string},
    catchy:{[string]:string},
    description:{[string]:string},
    genres:{[string]:[string]},
    useTMDB:boolean
};




const PaperContent = ({movie,lang,strings}: { movie: Movie,lang:string,strings:{[string]:string} }) => {
    return (<div>
        <DetailTitle title={movie.title[lang]?movie.title[lang]:movie.title['def']} catchy={movie.catchy[lang]?movie.catchy[lang]:movie.catchy['def']}/>
        <DetailInfo dateT={strings.orderDate} durationT={strings.duration} date={movie.date} duration={movie.duration}/>
    </div>)
};

const AdditionalContent = ({movie,color,lang,strings}: { movie: Movie,color:string,lang:string,strings:{[string]:string} }) => {
    return(
            <div className={'additionalwrapper'}>
                <DetailScores rtscore={movie.rtscore} audscore={movie.audscore} color={color}/>
                <DetailOverview strings={strings} description={movie.description[lang]?movie.description[lang]:movie.description['def']}/>
                <DetailPrizes awardsT={strings.awards} {...movie}/>
                <DetailGenres genresT={strings.genres} genres={movie.genres[lang]?movie.genres[lang]:movie.genres['def']}/>
                {(movie.trailer && movie.trailer['def'].length)?<DetailTrailer trailer={movie.trailer[lang]?movie.trailer[lang]:movie.trailer['def']}/>:''}
                <DetailPersonalInfo strings={strings} resolution={movie.resolution} hd={movie.hd}/>
            </div>
        )
};

type Props={
    fetchMovieDetails:Function,
    classes:{[string]:string},
    strings:{[string]:string},
    activeLanguage:string,
    movie:Movie,
    isFetching:boolean,
    errorMessage:string,
    match:{
        params:{
            id:number
        }
    }
}


class DetailPage extends React.Component<Props>{


    componentDidMount(){
        this.props.fetchMovieDetails(this.props.match.params.id);
    }

    render(){
        const {classes,strings,activeLanguage,movie,isFetching,errorMessage}=this.props;

        if(isFetching){
            return <p>Loading</p>;
        }
        if(errorMessage){
            console.error(errorMessage);
            return(
                <Redirect to={"/err"}/>
            );
        }
        if(!movie){
            return <div/>
        }
        const poster=movie.poster[activeLanguage]?movie.poster[activeLanguage]:movie.poster['def'];
        const posterurl=movie.useTMDB?(db.BASE_PATH_TMDB + 'original/' + poster): poster;
        return (
            <div className={'backm'}>
                <div className={'wrapper detail'}>
                    <div className={'megaposter'}>
                        <Paper elevation={10}>
                            <img src={posterurl} width={'100%'} height={'100%'}
                                 alt={movie.title[activeLanguage]?movie.title[activeLanguage]:movie.title['def']}/>
                        </Paper>
                    </div>
                    <div className={'megadetails'}>
                        <MediaQuery query="(max-width: 480px)">
                            <Paper classes={{root: classes.rootSmall}} elevation={10}>
                                <PaperContent movie={movie} lang={activeLanguage} strings={strings}/>
                            </Paper>
                        </MediaQuery>
                        <MediaQuery query="(min-width: 481px) and (max-width: 800px)">
                            <Paper classes={{root: classes.root}} elevation={10}>
                                <PaperContent movie={movie} lang={activeLanguage} strings={strings}/>
                            </Paper>
                        </MediaQuery>
                        <MediaQuery query="(min-width: 801px)">
                            <Paper classes={{root: classes.root}} elevation={10}>
                                <PaperContent movie={movie} lang={activeLanguage} strings={strings}/>
                                <AdditionalContent movie={movie} color={grey[50]} lang={activeLanguage} strings={strings}/>
                            </Paper>
                        </MediaQuery>
                    </div>
                </div>
                <MediaQuery query="(max-width: 800px)">
                    <AdditionalContent movie={movie} color={grey[800]} strings={strings} lang={activeLanguage}/>
                </MediaQuery>
            </div>)
    }
}



export default withStyles(styles)(DetailPage);
