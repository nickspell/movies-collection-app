// @flow
import React from 'react'

const DetailTitle=({title,catchy}:{title:string,catchy:string})=>{
    return(
        <div>
            <div className={'supertitle'}>
                {title}
            </div>
            <div className={'catchy'}>
                {catchy}
            </div>
        </div>
    );
};

export default DetailTitle;