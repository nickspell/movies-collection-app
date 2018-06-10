import {localizedStrings} from "../../localization/strings";
import {connect} from "react-redux";
import Page404 from "./Page404";

const mapStateToProps=(state)=>{
    return{
        strings:localizedStrings[state.activeLanguage]
    }
};


const Page404Container=connect(
    mapStateToProps
)(Page404);

export default Page404Container;