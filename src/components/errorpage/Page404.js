//@flow
import React from 'react'
import '../../styles/css/components/error.css'

const Page404 =({strings}:{strings:{[string]:string}})=>{
    return(
        <div className={'backm'}>
            <div className={'error'}>
                <div><span className={'text404'}>404</span></div>
                <div><span className={'texterr'}>{strings.err404}</span></div>
            </div>
        </div>

    );
};

export default Page404;