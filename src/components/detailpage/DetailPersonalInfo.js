// @flow
import React from 'react'


const DetailPersonalInfo=({resolution,hd,strings}:{resolution:string,hd:string,strings:{[string]:string}})=>{
    return(
        <div style={{marginTop:10}}>
            {resolution?
            <div className={"reldur"}>
                <div className={"rel"}>
                    <span className={'smallinfotag'}>{strings.resolution + ':'}</span>
                    &nbsp;
                    <span className={'smallinfo'}>{resolution}</span>
                </div>

            </div>:''}
            {hd?
            <div className={"reldur"}>
                <div className={"rel"}>
                    <span className={'smallinfotag'}>{strings.label + ':'}</span>
                    &nbsp;
                    <span className={'smallinfo'}>{hd}</span>
                </div>
            </div>:''}
        </div>
    );
};

export default DetailPersonalInfo;