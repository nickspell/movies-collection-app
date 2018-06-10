import {FETCH_MOVIES_SUCCESS} from "../actions";

const byID=(state={},action)=>{
    switch(action.type){
        case FETCH_MOVIES_SUCCESS:
            const nextState = { ...state };
            action.response.forEach(movie => {
                nextState[movie.mvid] = movie;
            });
            return nextState;
        default:
            return state;
    }
};

export default byID;
