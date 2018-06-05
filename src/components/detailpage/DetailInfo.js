// @flow
import React from 'react'
import * as str from "../../localization/strings";

const getFormatDuration = (duration: number) => {
    const hours = parseInt(duration / 60);
    const minutes = duration - hours * 60;
    return `${hours}h${minutes}`
};

const DetailInfo=({date,duration}:{date:number,duration:number})=>{
    return(
        <div className={"reldur"}>
            <div className={"rel"}>
                <span className={'titolino'}>{str.strings.orderDate + ':'}</span>
                &nbsp;
                <span className={'rispostina'}>{date}</span>
            </div>
            <div className={"dur"}>
                <span className={'titolino'}>{str.strings.duration + ':'}</span>
                &nbsp;
                <span className={'rispostina'}>{getFormatDuration(duration)}</span>
            </div>
        </div>
    );
};

export default DetailInfo;