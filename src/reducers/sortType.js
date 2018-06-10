import {SET_SORT_TYPE} from "../actions";
import {sorttypes} from '../actionsparameters/sorttypes'

const sortType=(state=sorttypes[0],action)=>{
    switch (action.type){
        case SET_SORT_TYPE:
            return sorttypes.includes(action.sortType)?action.sortType:state;
        default:
            return state;
    }
};

export default sortType;