// @flow
import React from 'react';
import '../../../styles/css/main.css'
import '../../../styles/css/components/mainpage.css'
import ToolBar from "./toolbar/ToolBar";
import MoviesGrid from "./moviesgrid/MoviesGrid";



const MainPage =()=>{
    return(
        <div className="backm">
            <div className='wrapper maintweak'>
                <ToolBar/>
                <MoviesGrid/>
            </div>
        </div>
    );
};

export default MainPage;