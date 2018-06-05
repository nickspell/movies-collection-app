// @flow
import React from 'react'
import CircularProgressbar from "react-circular-progressbar";
import deepOrange from "@material-ui/core/es/colors/deepOrange";
import yellow from "@material-ui/core/es/colors/yellow";
import green from "@material-ui/core/es/colors/green";


const getColorFromPercentage = (perc: number) =>
    perc >= 50 ? (perc >= 80 ? green['A700'] : yellow['A400']) : deepOrange['A400'];



const DetailScores=({rtscore,audscore,color}:{rtscore:number,audscore:number,color:string})=>{
    return(
        <div className={"scores"}>
            <span className={'titolino'}>{'Rotten Tomatoes:'}</span>
            <div className={"rt"}>
                <CircularProgressbar
                    percentage={rtscore}
                    strokeWidth={10}
                    initialAnimation={true}
                    textForPercentage={(pct) => `${pct}`}
                    styles={{
                        path: {
                            stroke: getColorFromPercentage(rtscore)
                        },
                        text:{
                            fill:color,
                            fontSize: 35,
                            fontFamily: '"Roboto", "Helvetica","Arial",sans-serif'
                        }
                    }}/>
            </div>
            <span className={'titolino'}>{'Audience Score:'}</span>
            <div className={"rt"}>
                <CircularProgressbar
                    percentage={audscore}
                    strokeWidth={10}
                    initialAnimation={true}
                    textForPercentage={(pct) => `${pct}`}
                    styles={{
                        path: {
                            stroke: getColorFromPercentage(audscore)
                        },
                        text:{
                            fill:color,
                            fontSize: 35,
                            fontFamily: '"Roboto", "Helvetica","Arial",sans-serif'
                        }
                    }}/>
            </div>
        </div>
    );
};

export default DetailScores;