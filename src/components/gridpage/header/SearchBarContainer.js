import {localizedStrings} from "../../../localization/strings";
import {connect} from "react-redux";
import SearchBar from "./SearchBar";
import {setFilterType} from "../../../actions";

const mapStateToProps=(state)=>{
    return{
        strings:localizedStrings[state.activeLanguage],
        filterType:state.filterType
    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        onFilterTypeChange:(type)=>{
            dispatch(setFilterType(type))
        }
    }
};

const SearchBarContainer=connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);


export default SearchBarContainer;