//@flow
import {connect} from "react-redux";
import MovieCard from "./MovieCard";
import * as actions from '../../../../actions/index';

const mapStateToProps=(state)=>{
    return{
        activeLanguage:state.activeLanguage
    }
};

const MovieCardContainer=connect(
    mapStateToProps,
    actions
)(MovieCard);

export default MovieCardContainer;