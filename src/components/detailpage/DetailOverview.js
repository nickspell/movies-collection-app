// @flow
import React from 'react'
import * as str from "../../localization/strings";
import Description from "./Description";

const DetailOverview=({description}:{description:string})=>{
    return(
        <div>
            <div>
                <span className={'titolino'}>{str.strings.description}</span>
            </div>
            <Description description={description}/>
        </div>
    );
};

export default DetailOverview;