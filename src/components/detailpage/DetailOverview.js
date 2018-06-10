// @flow
import React from 'react'
import Description from "./Description";

const DetailOverview=(props:{description:string,strings:{[string]:string}})=>{
    return(
        <div>
            <div>
                <span className={'titolino'}>{props.strings.description}</span>
            </div>
            <Description {...props} />
        </div>
    );
};

export default DetailOverview;