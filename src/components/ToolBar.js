import React from 'react'
import '../styles/css/components/toolbar.css'
import AddButton from "./AddButton";
import OrderingMenu from "./OrderingMenu";

const ToolBar=()=>{
    return(
        <div className="tool">
            <OrderingMenu selectedSort={"duration"} ascending={true}/>
            <AddButton/>
        </div>
    )
};

export default ToolBar;