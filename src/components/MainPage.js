import React from 'react';
import '../styles/css/main.css'
import '../styles/css/components/mainpage.css'
import ToolBar from "./ToolBar";
import MoviesGrid from "./MoviesGrid";

const MainPage =()=>{
    return(
        <div className="backm">
            <div className="wrapper" style={{"padding":0}}>
                <ToolBar/>
                <MoviesGrid/>
            </div>
        </div>
    );
};

export default MainPage;