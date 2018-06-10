import {localizedStrings} from "../../../../localization/strings";
import {connect} from "react-redux";
import OrderingMenu from "./OrderingMenu";
import {setSortType, toggleSortOrder} from "../../../../actions";


const mapStateToProps=(state)=>{
    return{
        strings:localizedStrings[state.activeLanguage],
        selectedSort:state.sortType,
        ascending:state.sortOrder,
    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        onChangeSortType:(type)=>{
            dispatch(setSortType(type));
        },
        onToggleOrder:()=>{
            dispatch(toggleSortOrder());
        }
    }
}

const OrderingMenuContainer=connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderingMenu);


export default OrderingMenuContainer;