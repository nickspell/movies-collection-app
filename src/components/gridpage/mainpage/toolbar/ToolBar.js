// @flow
import React from 'react'
import '../../../../styles/css/components/toolbar.css'
import AddButton from "./AddButton";
import OrderingMenuContainer from "./OrderingMenuContainer";



const ToolBar=()=>{
    return(
        <div className="tool">
            <div className={"minitool"}>
                    <OrderingMenuContainer/>
                    <AddButton/>
            </div>
        </div>
    )
};

export default ToolBar;