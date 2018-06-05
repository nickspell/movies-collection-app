// @flow
import React from 'react'
import '../../../../styles/css/components/toolbar.css'
import OrderingMenu from "./OrderingMenu";
import AddButton from "./AddButton";



const ToolBar=()=>{
    return(
        <div className="tool">
            <OrderingMenu selectedSort={"duration"} ascending={true}/>
            <AddButton/>
        </div>
    )
};

export default ToolBar;