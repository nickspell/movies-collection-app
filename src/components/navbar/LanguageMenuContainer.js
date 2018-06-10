import {setLanguage} from '../../actions/index'
import {connect} from "react-redux";
import LanguageMenu from "./LanguageMenu";

const mapStateToProps=(state)=>{
    return {
        activeLanguage: state.activeLanguage,
    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        onLanguageChange: (code)=>{
            dispatch(setLanguage(code));
        }
    }
};


const LanguageMenuContainer=connect(
    mapStateToProps,
    mapDispatchToProps
)(LanguageMenu);

export default LanguageMenuContainer;
