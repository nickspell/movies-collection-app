// @flow
import React from 'react';
import '../../../styles/css/main.css'
import '../../../styles/css/components/mainpage.css'
import ToolBar from "./toolbar/ToolBar";
import MoviesGridContainer from "./moviesgrid/MoviesGridContainer";



const MainPage =()=>{
    return(
        <div className="backm">
            <div className='wrapper maintweak'>
                <ToolBar/>
                <MoviesGridContainer/>
            </div>
        </div>
    );
};

export default MainPage;