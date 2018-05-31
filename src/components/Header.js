// @flow

import React from 'react'
import '../styles/css/components/searchbar.css'
import logo from '../static/icons/silo.jpg'
import SearchBar from "./SearchBar";

const Header = ()=>{
    return(
        <div className={"back"}>
            <div className={"wrapper"}>
                <img src={logo} alt='Movie Collection logo' className={"logo"}/>
                <div className="title-container">
                    <div className={"pretitle"}>My </div><div className={"title"}>Movie Collection</div>
                </div>
                <SearchBar activeLanguage={"it"} filterById={false} />
            </div>
        </div>
    )
};

export default Header;