import {DELETE_MOVIE_SUCCESS} from "../actions";

const deletedMovie=(state=null,action)=>{
    switch (action.type){
        case DELETE_MOVIE_SUCCESS:
            return action.id;
        default:
            return state;
    }
};

export default deletedMovie;