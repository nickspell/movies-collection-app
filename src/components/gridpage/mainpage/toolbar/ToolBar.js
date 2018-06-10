// @flow
import React from 'react'
import '../../../../styles/css/components/toolbar.css'
import AddButton from "./AddButton";
import OrderingMenuContainer from "./OrderingMenuContainer";



const ToolBar=()=>{
    return(
        <div className="tool">
            <OrderingMenuContainer/>
            <AddButton/>
        </div>
    )
};

export default ToolBar;