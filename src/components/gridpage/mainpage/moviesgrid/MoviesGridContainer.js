// @flow

import React from "react";
import {getMovies} from "../../../../reducers/index";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from '../../../../actions/index';
import MoviesGrid from "./MoviesGrid";
import {getFormValues} from "redux-form/immutable";

type Props = {
    fetchMovies: Function,
    isFetching: boolean,
    movies: [any],
    errorMessage: string
}

class MoviesGridContainer extends React.Component<Props> {

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if(this.props.deletedMovie && this.props.deletedMovie!==prevProps.deletedMovie)
            this.fetchData();
    }


    fetchData = () => {
        this.props.fetchMovies();
    };

    render() {
        if (this.props.isFetching && !this.props.movies.length) {
            return <div>Loading</div>
        }
        if (this.props.errorMessage && !this.props.movies.length) {
            console.error(this.props.errorMessage);
            return <div>Error</div>
        }
        return (
            <MoviesGrid movies={this.props.movies} />);

    }

}

const getFilteredMovies = (movies, queryState, filterType, activeLanguage) => {
    if (!queryState || !queryState.query || !queryState.query.length) return movies;
    const query = queryState.query.toLowerCase();
    switch (filterType) {
        case 'mvid':
            return movies.filter(movie => movie.mvid === parseInt(query, 10));
        case 'title':
            return movies.filter(movie =>
                movie.title[activeLanguage] ? movie.title[activeLanguage].toLowerCase().includes(query) :
                    movie.title['def'].toLowerCase().includes(query));
        default:
            return [];
    }

};

const getSortedMovies = (movies, sortBy, order, activeLanguage) => {
    if (sortBy === 'title') {
        movies.sort((moviea, movieb) => {
            const tocompa = moviea[sortBy][activeLanguage] ? moviea[sortBy][activeLanguage] : moviea[sortBy]['def'];
            const tocompb = movieb[sortBy][activeLanguage] ? movieb[sortBy][activeLanguage] : movieb[sortBy]['def'];
            return order ? tocompa > tocompb : tocompb > tocompa;
        })
    } else {
        movies.sort((moviea, movieb) => {
            return order ? moviea[sortBy] > movieb[sortBy] : moviea[sortBy] < movieb[sortBy];
        })
    }
    return movies;

};


const mapStateToProps = (state) => ({
    movies: getSortedMovies(
                getFilteredMovies(getMovies(state), getFormValues('searchBar')(state), state.filterType, state.activeLanguage),
                state.sortType, state.sortOrder, state.activeLanguage),
    errorMessage: state.errorMessage,
    isFetching: state.isFetching,
    deletedMovie:state.deletedMovie
});



MoviesGridContainer = withRouter(connect(
    mapStateToProps,
    actions
)(MoviesGridContainer));

export default MoviesGridContainer;