// @flow
import React from 'react'
import {EmptyMovieCard} from "./MovieCard";
import '../../../../styles/css/components/mainpage.css'
import Grid from "@material-ui/core/es/Grid/Grid";
import {v4} from 'node-uuid';
import MovieCardContainer from "./MovieCardContainer";
type Props = {
    movies: [
        {
            mvid: number
        }
        ]
}

const MoviesGrid = ({movies}: Props) => {

    return (

        <div className="moviegrid">
            <Grid container spacing={16} justify={"center"}>
                {movies.map(movie => {
                    return (
                        <Grid key={movie.mvid} item>
                            <MovieCardContainer movie={movie}/>
                        </Grid>
                    )
                })}
                <Grid key={v4()} item>
                    <EmptyMovieCard/>
                </Grid>
                <Grid key={v4()} item>
                    <EmptyMovieCard/>
                </Grid>
                <Grid key={v4()} item>
                    <EmptyMovieCard/>
                </Grid>
                <Grid key={v4()} item>
                    <EmptyMovieCard/>
                </Grid>
                <Grid key={v4()} item>
                    <EmptyMovieCard/>
                </Grid>
                <Grid key={v4()} item>
                    <EmptyMovieCard/>
                </Grid>
            </Grid>
        </div>
    )
};


export default MoviesGrid;