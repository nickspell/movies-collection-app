// @flow
import React from 'react'
import * as str from "../../localization/strings";


const DetailPersonalInfo=({resolution,hd}:{resolution:string,hd:string})=>{
    return(
        <div style={{marginTop:10}}>
            <div className={"reldur"}>
                <div className={"rel"}>
                    <span className={'smallinfotag'}>{str.strings.resolution + ':'}</span>
                    &nbsp;
                    <span className={'smallinfo'}>{resolution}</span>
                </div>

            </div>
            <div className={"reldur"}>
                <div className={"rel"}>
                    <span className={'smallinfotag'}>{str.strings.label + ':'}</span>
                    &nbsp;
                    <span className={'smallinfo'}>{hd}</span>
                </div>
            </div>
        </div>
    );
};

export default DetailPersonalInfo;