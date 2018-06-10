// @flow
import React from 'react'

const getFormatDuration = (duration: number) => {
    const hours = parseInt(duration / 60,10);
    const minutes = duration - hours * 60;
    return `${hours}h${minutes}`
};

const DetailInfo=({date,duration,dateT,durationT}:{date:number,duration:number,dateT:string,durationT:string})=>{
    return(
        <div className={"reldur"}>
            <div className={"rel"}>
                <span className={'titolino'}>{dateT + ':'}</span>
                &nbsp;
                <span className={'rispostina'}>{date}</span>
            </div>
            <div className={"dur"}>
                <span className={'titolino'}>{durationT + ':'}</span>
                &nbsp;
                <span className={'rispostina'}>{getFormatDuration(duration)}</span>
            </div>
        </div>
    );
};

export default DetailInfo;