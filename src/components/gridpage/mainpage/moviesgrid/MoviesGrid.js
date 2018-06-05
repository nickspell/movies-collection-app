// @flow
import React from 'react'
import {EmptyMovieCard} from "./MovieCard";
import * as ReactDOM from "react-dom";
import '../../../../styles/css/components/mainpage.css'
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import MovieCard from "./MovieCard";

const movie={
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
};


const MoviesGrid=()=>{
    return(
        <div className="moviegrid">
            <Grid container spacing={16} justify={"center"}>
                {[0, 1, 2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map(value => (
                    <Grid key={value} item>
                        <MovieCard movie={movie}/>
                    </Grid>
                ))}
                <Grid key={20} item>
                    <EmptyMovieCard/>
                </Grid>
                <Grid key={21} item>
                    <EmptyMovieCard/>
                </Grid>
                <Grid key={22} item>
                    <EmptyMovieCard/>
                </Grid>
                <Grid key={23} item>
                    <EmptyMovieCard/>
                </Grid>
                <Grid key={24} item>
                    <EmptyMovieCard/>
                </Grid>
                <Grid key={25} item>
                    <EmptyMovieCard/>
                </Grid>
            </Grid>
        </div>
    )
};


export default MoviesGrid;