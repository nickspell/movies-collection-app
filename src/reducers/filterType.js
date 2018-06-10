import {SET_FILTER_TYPE} from "../actions";
import {filtertypes} from '../actionsparameters/filtertypes'

const filterType=(state=filtertypes[0],action)=>{
    switch (action.type){
        case SET_FILTER_TYPE:
            return filtertypes.includes(action.filterType)?action.filterType:state;
        default:
            return state;
    }
};

export default filterType;