import React from 'react'
import '../../styles/css/components/error.css'
import * as str from '../../localization/strings'

const Page404 =()=>{
    return(
        <div className={'backm'}>
            <div className={'error'}>
                <div><span className={'text404'}>404</span></div>
                <div><span className={'texterr'}>{str.strings.err404}</span></div>
            </div>
        </div>
    );
};

export default Page404;