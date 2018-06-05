// @flow
import React from 'react'
import YouTube from 'react-youtube'

const DetailTrailer=({trailer}:{trailer:string})=>{
    return(
        <div style={{marginTop:10}}>
            <span className={'titolino'}>{'Trailer:'}</span>
            <div className={'trailer'}>
                <YouTube
                    videoId={trailer}
                />
            </div>
        </div>
    );
};

export default DetailTrailer;